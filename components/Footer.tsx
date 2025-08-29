
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Cats vs Dogs Battle. All Rights Reserved.</p>
        <p className="mt-1">A fun project to settle the ultimate debate.</p>
      </div>
    </footer>
  );
};

export default Footer;
