
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Cats vs Dogs – The Ultimate Battle</h1>
      
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          <strong>Cats vs Dogs</strong> is a fun, interactive game where the world votes for their favorite pet. The competition is ongoing, and you can cast your vote once per day to help your team win!
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">Why Was This Created?</h2>
        <p>
          This project was born out of a simple, timeless debate that spans across cultures, continents, and communities: which pet is better, cats or dogs? We wanted to create a lighthearted platform to:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Fuel the Fun:</strong> To provide a daily dose of fun and friendly competition.</li>
          <li><strong>Build Community:</strong> To bring pet lovers together from all around the world to rally for their furry friends.</li>
          <li><strong>Settle the Debate:</strong> To use the power of data to finally answer the age-old question (or at least, keep the debate going with live stats!).</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">The Daily Reset</h2>
        <p>
          What makes the Cats vs Dogs battle truly exciting is the <strong>daily reset</strong>. Every day at midnight UTC, the daily counters are reset to zero. This means every day is a new chance for a team to claim victory, keeping the competition fresh, fun, and addictive. Your vote matters every single day!
        </p>
        
        <p>
          So, what are you waiting for? Cast your vote, share with your friends, and check back daily to see who is winning the ultimate pet showdown!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
