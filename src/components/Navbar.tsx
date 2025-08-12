import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const buttons = container.querySelectorAll("button.nav-item");

    if (buttons.length === 0) return;

    const activeButton = buttons[activeIndex];

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setHighlightStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeIndex]);

  return (
    <div className="w-full bg-gray-800 text-white p-4 border-b border-gray-700">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold">Asr-Somsa</h1>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <div
            ref={containerRef}
            className="relative flex rounded-md select-none"
          >
            <motion.div
              className="absolute top-0 bottom-0 bg-red-600 rounded-md z-0"
              style={{ left: highlightStyle.left, width: highlightStyle.width }}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {navLinks.map((item, index) => (
              <button
                key={item.route}
                onMouseEnter={() => setActiveIndex(index)}
                className={`nav-item relative z-10 px-6 py-2 text-lg font-semibold cursor-pointer ${
                  activeIndex === index ? "text-white" : "text-white/70"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <h1 className="text-2xl font-bold">+998999479947</h1>
          <SignedOut>
            <Button className="bg-red-600 text-white hover:bg-red-700 text-lg font-bold">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            {navLinks.map((item, index) => (
              <button
                key={item.route}
                onClick={() => {
                  setActiveIndex(index);
                  setMenuOpen(false);
                }}
                className={`text-left text-lg font-semibold w-full ${
                  activeIndex === index ? "text-white" : "text-white/70"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="border-t border-white/20 pt-4">
            <h1 className="text-lg font-bold mb-2">+998999479947</h1>
            <SignedOut>
              <Button className="bg-red-600 text-white hover:bg-red-700 w-full">
                <SignInButton mode="modal">Kirish</SignInButton>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
