import { useState } from "react";

export default function Navbar() {
  // Use a state variable to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between relative border-b border-gray-200 h-16 overflow-hidden">
      <h3 id="logo" className="font-logo font-bold text-xl ml-4 flex-grow-0">
        OWEN ERHABOR
      </h3>

      {/* Button to open the mobile menu */}
      <button
        onClick={toggleMenu}
        className="border-none bg-none cursor-pointer flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M4 24V22H28V24H4ZM4 17V15H28V17H4ZM4 10V8H28V10H4Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* This is the dark overlay. It's conditionally rendered based on state */}
      <div
        onClick={toggleMenu} // Clicks on the overlay close the menu
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[1px] z-[1000] transition-opacity duration-300 ease-out
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* The main mobile menu list. Its position is also conditional */}
      <div
        className={`fixed top-0 right-0 h-screen w-[--side-bar-width] bg-gray-100 flex flex-col items-start p-8 z-[1001]
          transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Button to close the menu */}
        <span
          role="button"
          onClick={toggleMenu} // Clicks on the 'X' close the menu
          className="absolute top-4 right-4 cursor-pointer text-blue-500 w-6 h-6 flex items-center justify-center p-2 rounded-full"
        >
          X
        </span>
        <ul className="w-full">
          {/* A divider line */}
          <li className="list-none w-full border-t-2 border-blue-500 pt-8 mt-4"></li>
          <li className="list-none py-4 text-sm font-semibold">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li className="list-none py-4 text-sm font-semibold">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li className="list-none py-4 text-sm font-semibold">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li className="list-none py-4 text-sm font-semibold">
            <a
              href="/pages/contact.html"
              className="text-gray-800 hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
