
import React from 'react';

interface VoteButtonProps {
  onClick: () => void;
  disabled: boolean;
  team: 'cat' | 'dog';
}

const VoteButton: React.FC<VoteButtonProps> = ({ onClick, disabled, team }) => {
  const baseClasses = "w-full text-white font-bold py-4 px-4 rounded-lg shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-4";
  const enabledClasses = "hover:scale-105 hover:shadow-2xl";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  const teamStyles = {
    cat: {
      bgColor: "bg-[#8e44ad]",
      ringColor: "focus:ring-[#a052c8]",
      emoji: "🐱",
      text: "Vote Cat"
    },
    dog: {
      bgColor: "bg-[#e67e22]",
      ringColor: "focus:ring-[#f39c12]",
      emoji: "🐶",
      text: "Vote Dog"
    }
  };

  const currentTeam = teamStyles[team];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${currentTeam.bgColor} ${currentTeam.ringColor} ${disabled ? disabledClasses : enabledClasses}`}
    >
      <span className="text-2xl">{currentTeam.text} {currentTeam.emoji}</span>
    </button>
  );
};

export default VoteButton;
