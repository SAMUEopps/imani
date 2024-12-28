import React from 'react';
import Link from 'next/link';
import { FaInfoCircle, FaCogs, FaPhone } from 'react-icons/fa'; // Import icons

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-semibold"> {/* Adjust logo size for small screens */}
          <Link href="/">
            <span className="text-white">Imani</span> <span className="text-yellow-500">Imports</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            {/* Use icons instead of text on small screens */}
            <li className="sm:hidden">
              <Link href="/about">
                <FaInfoCircle className="text-white" />
              </Link>
            </li>
            <li className="sm:hidden">
              <Link href="/services">
                <FaCogs className="text-white" />
              </Link>
            </li>
            <li className="sm:hidden">
              <Link href="/contact">
                <FaPhone className="text-white" />
              </Link>
            </li>

            {/* Text links for larger screens */}
            <li className="hidden sm:block">
              <Link href="/about">About</Link>
            </li>
            <li className="hidden sm:block">
              <Link href="/services">Services</Link>
            </li>
            <li className="hidden sm:block">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

