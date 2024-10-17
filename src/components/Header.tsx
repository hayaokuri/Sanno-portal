import React from 'react';
import { FaBell, FaUser, FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">産業能率大学 ポータル</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="検索..."
              className="bg-blue-500 text-white placeholder-blue-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaSearch className="absolute right-3 top-3 text-blue-200" />
          </div>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <FaBell />
          </button>
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <FaUser />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;