import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import logo from '../assets/KAM-Logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-700 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center whitespace-nowrap z-20">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <h1 className="font-bold text-lg">KAM Data Portal</h1>
        </div>
        <button
          className="md:hidden text-white text-2xl z-30"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <nav className={`absolute top-16 left-0 w-full bg-blue-700 text-white md:static md:flex md:items-center md:justify-between md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block z-10`}>
          <ul className="hidden md:flex flex-grow justify-center space-x-4">
            <li><Link to="/" className="hover:underline" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/data-repository" className="hover:underline" onClick={closeMenu}>KAM Data Repository</Link></li>
            <li><Link to="/data-sheets" className="hover:underline" onClick={closeMenu}>Basic Data Sheets</Link></li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <Link to="/login" onClick={closeMenu}>
              <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-4 rounded">Log In</button>
            </Link>
            <Link to="/signup" onClick={closeMenu}>
              <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-4 rounded">Sign Up</button>
            </Link>
          </div>
          <div className={`md:hidden flex flex-col items-center space-y-2 p-4 mt-16 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" className="hover:underline" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/data-repository" className="hover:underline" onClick={closeMenu}>KAM Data Repository</Link></li>
              <li><Link to="/data-sheets" className="hover:underline" onClick={closeMenu}>Basic Data Sheets</Link></li>
              <li><Link to="/login" className="hover:underline" onClick={closeMenu}>Log In</Link></li>
              <li><Link to="/signup" className="hover:underline" onClick={closeMenu}>Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
