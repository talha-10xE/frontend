import { useState, useEffect, useCallback } from 'react';
import { VoteChoice, Votes } from '../types';

const API_BASE = "https://backend-rust-chi.vercel.app/api/counter"; 
// ⬆️ Change this later to your deployed backend URL (e.g. Render/Vercel)

const getTodayUTC = () => {
  const today = new Date();
  return new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
    .toISOString()
    .split('T')[0];
};

export const useVoting = () => {
  const [dailyVotes, setDailyVotes] = useState<Votes>({ cat: 0, dog: 0 });
  const [lifetimeVotes, setLifetimeVotes] = useState<Votes>({ cat: 0, dog: 0 });
  const [userVotedToday, setUserVotedToday] = useState<boolean>(false);
  const [lastVote, setLastVote] = useState<VoteChoice | null>(null);

  // 📌 Load data from DB on mount
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();

        setDailyVotes({ cat: data.cats_today, dog: data.dogs_today });
        setLifetimeVotes({ cat: data.cats_lifetime, dog: data.dogs_lifetime });

        // Store in localStorage for fallback (optional)
        localStorage.setItem('lifetimeVotes', JSON.stringify({
          cat: data.cats_lifetime,
          dog: data.dogs_lifetime
        }));
      } catch (err) {
        console.error("❌ Failed to fetch votes from server:", err);
        // fallback to localStorage
        const storedLifetimeVotes = localStorage.getItem("lifetimeVotes");
        if (storedLifetimeVotes) {
          setLifetimeVotes(JSON.parse(storedLifetimeVotes));
        }
      }
    };

    fetchVotes();

    // Check if already voted today
    const lastVoteDate = localStorage.getItem('lastVoteDate');
    const today = getTodayUTC();
    if (lastVoteDate === today) {
      setUserVotedToday(true);
    }
  }, []);

  // 📌 Handle vote (local + DB)
  const handleVote = useCallback(async (choice: VoteChoice) => {
    if (userVotedToday) return;

    const today = getTodayUTC();

    // Optimistic UI update (update immediately)
    const newDailyVotes = { ...dailyVotes, [choice]: dailyVotes[choice] + 1 };
    setDailyVotes(newDailyVotes);

    const newLifetimeVotes = { ...lifetimeVotes, [choice]: lifetimeVotes[choice] + 1 };
    setLifetimeVotes(newLifetimeVotes);

    // Save vote state locally
    setUserVotedToday(true);
    setLastVote(choice);
    localStorage.setItem('lastVoteDate', today);

    try {
      // Call backend API
      const res = await fetch(`${API_BASE}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pet: choice })
      });

      if (!res.ok) {
        throw new Error("Failed to update vote in DB");
      }

      const updated = await res.json();
      setDailyVotes({ cat: updated.cats_today, dog: updated.dogs_today });
      setLifetimeVotes({ cat: updated.cats_lifetime, dog: updated.dogs_lifetime });
    } catch (err) {
      console.error("❌ Error updating vote in DB:", err);
    }
  }, [userVotedToday, dailyVotes, lifetimeVotes]);

  // 📌 Percentages for frontend display
  const totalLifetimeVotes = lifetimeVotes.cat + lifetimeVotes.dog;
  const catLifetimePercentage = totalLifetimeVotes > 0 ? (lifetimeVotes.cat / totalLifetimeVotes) * 100 : 50;
  const dogLifetimePercentage = totalLifetimeVotes > 0 ? (lifetimeVotes.dog / totalLifetimeVotes) * 100 : 50;

  return {
    dailyVotes,
    lifetimeVotes,
    userVotedToday,
    handleVote,
    catLifetimePercentage,
    dogLifetimePercentage,
    lastVote
  };
};
