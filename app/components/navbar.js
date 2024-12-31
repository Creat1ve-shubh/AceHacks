import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
  
    <nav className="fixed z-10 top-0 left-1/2 m-8 transform -translate-x-1/2 bg-opacity-30 hover:bg-opacity-20 bg-gray-800  text-white py-2 px-8 rounded-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/History">Our History</Link>
        </li>
        <li>
          <Link href="/Wall">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;