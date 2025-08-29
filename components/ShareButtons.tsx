
import React from 'react';
import { VoteChoice } from '../types';

interface ShareButtonsProps {
  lastVote: VoteChoice | null;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ lastVote }) => {
  const shareText = `I just voted for Team ${lastVote ? (lastVote === 'cat' ? 'Cat' : 'Dog') : 'Cat or Dog'} in the ultimate Cats vs Dogs battle! Who will you vote for?`;
  const shareUrl = window.location.href;

  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText} ${encodedUrl}`,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold text-center mb-4">Share Your Vote With Friends!</h3>
      <div className="flex justify-center space-x-4">
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.418.113-.863.173-1.328.173-.305 0-.6-.03-.89-.086.63 1.884 2.457 3.261 4.623 3.301-1.623 1.272-3.669 2.029-5.885 2.029-1.017 0-1.923-.097-2.784-.287 2.093 1.349 4.582 2.126 7.24 2.126 8.693 0 13.456-7.222 13.456-13.456 0-.204-.005-.407-.014-.61.923-.665 1.723-1.491 2.357-2.448z"></path></svg>
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path></svg>
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.12l-1.179 4.308 4.312-1.138z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
