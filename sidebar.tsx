import React from 'react';
import Link from 'next/link';
const Sidebar: React.FC = () => (
  <nav className="bg-gray-800 text-white w-64 min-h-screen p-4 hidden md:block">
    <ul>
      <li className="mb-2"><Link href="/teachers"><a className="hover:bg-gray-700 px-2 py-1 rounded">Teachers</a></Link></li>
      {/* Add more nav items as needed */}
    </ul>
  </nav>
);
export default Sidebar;
