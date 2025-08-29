
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = 'text-white bg-gray-700';
  const inactiveLinkClass = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          🐱<span className="text-[#8e44ad]">Cats</span> vs <span className="text-[#e67e22]">Dogs</span>🐶
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
