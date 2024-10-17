import React from 'react';
import { FaHome, FaCalendar, FaBook, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: FaHome, text: 'ホーム' },
    { icon: FaCalendar, text: 'スケジュール' },
    { icon: FaBook, text: '履修' },
    { icon: FaGraduationCap, text: '成績' },
    { icon: FaClipboardList, text: 'シラバス' },
  ];

  return (
    <nav className="bg-gray-800 text-white w-64 p-6 space-y-6">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded transition duration-200"
        >
          <item.icon className="text-xl" />
          <span>{item.text}</span>
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;