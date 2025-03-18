/*"use client"
import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline, IoLogoTwitter, IoLogoFacebook, IoLogoDribbble, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const socialIcons = [
    { icon: <IoLogoTwitter />, name: 'Twitter' },
    { icon: <IoLogoFacebook />, name: 'Facebook' },
    { icon: <IoLogoDribbble />, name: 'Dribbble' },
    { icon: <IoLogoInstagram />, name: 'Instagram' },
    { icon: <IoLogoYoutube />, name: 'YouTube' },
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${
      isScrolled ? 'fixed top-0 animate-slideIn' : 'absolute'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <a href="#" className="logo">
          <img src="/assets/images/logo-dark.svg" alt="Julia home" className="w-16 h-6" />
        </a>

        {/* Mobile Menu Button *
        <button
          onClick={toggleMenu}
          aria-label="open menu"
          className="lg:hidden text-3xl text-gray-800"
        >
          <IoMenuOutline />
        </button>

        {/* Desktop Navigation *
        <nav className="hidden lg:flex flex-grow justify-between items-center ml-8">
          <ul className="flex gap-6 mx-auto">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-800 hover:text-red-500 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a href="mailto:info@email.com" className="text-gray-600 hover:text-red-500">
                info@email.com
              </a>
              <a href="tel:001234567890" className="text-gray-600 hover:text-red-500">
                00 (123) 456 78 90
              </a>
            </div>
            
            <ul className="flex gap-4">
              {socialIcons.map((social) => (
                <li key={social.name}>
                  <a href="#" className="text-gray-800 hover:text-red-500 text-xl">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation *
        <nav className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white p-6 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}>
          <div className="flex justify-between items-center mb-8">
            <img src="/assets/images/logo-light.svg" alt="Julia home" className="w-16 h-6" />
            <button
              onClick={toggleMenu}
              aria-label="close menu"
              className="p-1 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

          <ul className="space-y-4 mb-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="block py-2 font-semibold hover:text-red-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-8 space-y-2">
            <a href="mailto:info@email.com" className="block hover:text-red-400">info@email.com</a>
            <a href="tel:001234567890" className="block hover:text-red-400">00 (123) 456 78 90</a>
          </div>

          <ul className="flex gap-4">
            {socialIcons.map((social) => (
              <li key={social.name}>
                <a href="#" className="text-xl hover:text-red-400">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay *
        <div
          onClick={closeMenu}
          className={`fixed inset-0 bg-black transition-opacity ${
            isMenuOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } lg:hidden`}
          role="presentation"
          aria-hidden={!isMenuOpen}
        />
      </div>
    </header>
  );
}*/
"use client"
import { useState, useEffect } from 'react';
import { Menu, X, Twitter, Facebook, Dribbble, Instagram, Youtube } from 'react-feather';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
  const socialIcons = [
    { Icon: Twitter, name: 'Twitter' },
    { Icon: Facebook, name: 'Facebook' },
    { Icon: Dribbble, name: 'Dribbble' },
    { Icon: Instagram, name: 'Instagram' },
    { Icon: Youtube, name: 'Youtube' },
  ];

  return (
    <header className={`absolute top-0 left-0 w-full bg-white shadow-md z-50 ${
      isScrolled ? 'fixed animate-slideIn' : ''
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        <a href="#" className="logo">
          <img 
            src="/assets/images/logo-dark.svg" 
            alt="Julia Home" 
            className="w-16 h-6 dark-logo" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow items-center justify-between ml-8">
          <ul className="flex gap-8 mx-auto">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-800 hover:text-red-500 transition-colors font-bold">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="mailto:info@email.com" className="text-gray-600 hover:text-red-500">
                info@email.com
              </a>
              <a href="tel:001234567890" className="text-gray-600 hover:text-red-500">
                00 (123) 456 78 90
              </a>
            </div>
            
            <ul className="flex gap-4">
              {socialIcons.map(({ Icon, name }) => (
                <li key={name}>
                  <a href="#" className="text-gray-800 hover:text-red-500">
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800"
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>

        {/* Mobile Navigation */}
        <nav className={`fixed top-0 left-0 h-full w-72 bg-gray-900 text-white p-6 transform transition-transform duration-300 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden z-50`}
        >
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/assets/images/logo-light.svg" 
              alt="Julia Home" 
              className="w-16 h-6" 
            />
            <button
              onClick={toggleMenu}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-4 mb-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href="#" 
                  className="block py-2 font-bold hover:text-red-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-8 space-y-2">
            <a href="mailto:info@email.com" className="block hover:text-red-400 transition-colors">
              info@email.com
            </a>
            <a href="tel:001234567890" className="block hover:text-red-400 transition-colors">
              00 (123) 456 78 90
            </a>
          </div>

          <ul className="flex gap-4">
            {socialIcons.map(({ Icon, name }) => (
              <li key={name}>
                <a href="#" className="hover:text-red-400 transition-colors">
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 bg-black transition-opacity ${
            isMenuOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } lg:hidden`}
        />
      </div>
    </header>
  );
}