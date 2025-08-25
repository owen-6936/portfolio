import { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Link from "./CustomLink";
import links from "../constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeNavItem, setActiveNavItem] = useState("");

  const handleLocationChange = () => {
    const currentPath = location.pathname;
    const activeLink = links.find((link) => link.url === currentPath);
    setActiveNavItem(activeLink ? String(activeLink.key) : "");
  };

  useEffect(() => {
    handleLocationChange();
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-gray-100 shadow-md h-[var(--nav-height)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-logo font-bold">Owen Erhabor</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-12">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.url}
              className={`${
                activeNavItem === link.key ? "link-active" : "link"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 focus:outline-none cursor-pointer"
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
      <SidebarMenu
        activeNavItem={activeNavItem}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
