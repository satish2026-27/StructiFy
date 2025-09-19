import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library
import {Link} from "react-router"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-green-500 flex items-center">
        <img src="protein-logo.png" width={30} height={20} className="mr-3" alt="StructiFy Logo" />
        <a href = "#hero">StructiFy</a>
        </div>


      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-md">
        <li>
          <a href="#features" className="hover:text-green-400 hover:underline transition">Features</a>
        </li>
        <li>
          <a href="#howitworks" className="hover:text-green-400 hover:underline transition">How It Works</a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-400 hover:underline transition">About</a>
        </li>
        <li>
            <a href = "#contact" className ="hover:text-green-400 hover:underline transition">Contact</a>
        </li>
        <li>
            <a href = "#credits" className ="hover:text-green-400 hover:underline transition">Credits</a>
        </li>
      </ul>

      {/* CTA Button (desktop only) */}
      <div className="hidden md:block">
        <Link to ="/Form" className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden shadow-lg z-50">
          <a href="#features" className="hover:text-red-400 transition" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" className="hover:text-red-400 transition" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#about" className="hover:text-red-400 transition" onClick={() => setIsOpen(false)}>About</a>
          <Link to="/form" className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

