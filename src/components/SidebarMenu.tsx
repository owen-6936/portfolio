import { motion, AnimatePresence } from "framer-motion";
import Link from "./CustomLink";
import links from "../constants/links";
import { X } from "lucide-react";

export default function SidebarMenu({
  isOpen,
  onClose,
  activeNavItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeNavItem: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[var(--side-bar-width)] bg-white z-50 p-6 flex flex-col space-y-6"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <X
              onClick={onClose}
              className="cursor-pointer w-5 h-5 mb-3 text-accent"
            />
            <hr className="text-gray-500 mt-0 mb-6" />

            {links.map((link) => (
              <Link
                key={link.key}
                to={link.url}
                className={`${
                  activeNavItem === link.key
                    ? "sidebar-link-active"
                    : "sidebar-link"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
