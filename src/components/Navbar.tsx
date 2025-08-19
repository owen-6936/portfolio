import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Link from "./CustomLink";
import links from "../constant/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-logo font-bold">Owen Erhabor</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.url}
              className="text-accent px-1.5 py-1 rounded hover:bg-slate-100"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
