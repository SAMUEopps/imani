import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">
            <span className="text-white">Imani</span> <span className="text-yellow-500">Imports</span>
          </Link>
        </div>



        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
