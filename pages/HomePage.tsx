
import React, { useState, useEffect } from 'react';
import { useVoting } from '../hooks/useVoting';
import { VoteChoice } from '../types';
import VoteButton from '../components/VoteButton';
import ProgressBar from '../components/ProgressBar';
import ShareButtons from '../components/ShareButtons';
import Confetti from '../components/Confetti';

const HomePage: React.FC = () => {
  const { 
    dailyVotes, 
    userVotedToday, 
    handleVote, 
    catLifetimePercentage, 
    dogLifetimePercentage,
    lifetimeVotes,
    lastVote
  } = useVoting();
  
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (lastVote) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [lastVote]);

  return (
    <div className="space-y-12">
      {showConfetti && <Confetti />}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Cats vs Dogs – The Ultimate Battle 🐱🐶</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">Vote once a day and decide which pet rules the world!</p>
        {userVotedToday && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thanks for voting today! Come back tomorrow to vote again.
            </div>
        )}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Cat Column */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-4 border-[#8e44ad]">
          <img 
            src="/cat.jpeg" 
            alt="A cute majestic cat ready to battle for Team Cat" 
            className="rounded-lg mb-4 w-full object-cover h-64" 
          />
          <h3 className="text-3xl font-bold mb-4 text-[#8e44ad]">Team Cat</h3>
          <div className="w-full">
            <VoteButton team="cat" onClick={() => handleVote(VoteChoice.Cat)} disabled={userVotedToday} />
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg text-gray-500">Today's Votes:</p>
            <p className="text-4xl font-bold text-[#8e44ad]">{dailyVotes.cat.toLocaleString()}</p>
          </div>
        </div>

        {/* Dog Column */}
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-4 border-[#e67e22]">
          <img 
            src="/dog.jpeg" 
            alt="A playful happy dog representing Team Dog in the ultimate voting battle" 
            className="rounded-lg mb-4 w-full object-cover h-64" 
          />
          <h3 className="text-3xl font-bold mb-4 text-[#e67e22]">Team Dog</h3>
          <div className="w-full">
            <VoteButton team="dog" onClick={() => handleVote(VoteChoice.Dog)} disabled={userVotedToday} />
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg text-gray-500">Today's Votes:</p>
            <p className="text-4xl font-bold text-[#e67e22]">{dailyVotes.dog.toLocaleString()}</p>
          </div>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2">All-Time Battle Stats</h2>
        <p className="text-center text-gray-600 mb-4">Since launch, the internet has spoken… but the battle isn’t over!</p>
        <div className="flex justify-between items-center mb-2 font-bold">
            <span className="text-[#8e44ad] text-xl">Total Cat Votes: {lifetimeVotes.cat.toLocaleString()}</span>
            <span className="text-[#e67e22] text-xl">Total Dog Votes: {lifetimeVotes.dog.toLocaleString()}</span>
        </div>
        <ProgressBar catPercentage={catLifetimePercentage} dogPercentage={dogLifetimePercentage} />
      </section>

      <ShareButtons lastVote={lastVote} />

    </div>
  );
};

export default HomePage;
