import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";

export default function Header({ isApproved, onToggleApproved }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Trade approved banner */}
      <AnimatePresence>
        {isApproved && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-sage-500 text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-center gap-2 text-[11px] tracking-[0.1em]">
              <ShieldCheck size={13} />
              <span>Designer Trade Account — 15% off eligible products applied at checkout</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="no-underline">
            <span
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-500 ${
                scrolled ? "text-warm-900" : "text-white"
              }`}
            >
              RIKUMO
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["Programs", "Process", "Collection"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-[13px] tracking-[0.08em] no-underline transition-colors duration-300 ${
                  scrolled
                    ? "text-warm-500 hover:text-warm-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}

            <button
              onClick={onToggleApproved}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-[0.05em] font-medium transition-all duration-300 cursor-pointer ${
                isApproved
                  ? "bg-sage-500 text-white border border-sage-500 shadow-sm"
                  : scrolled
                  ? "bg-transparent text-warm-500 border border-warm-300 hover:border-warm-500"
                  : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20"
              }`}
            >
              {isApproved && <ShieldCheck size={12} />}
              {isApproved ? "Designer Trade Approved" : "Toggle Trade View"}
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 cursor-pointer bg-transparent border-0 transition-colors ${
              scrolled ? "text-warm-900" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-warm-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {["Programs", "Process", "Collection"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-warm-700 no-underline"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  onToggleApproved();
                  setMobileOpen(false);
                }}
                className="text-sm text-sage-600 bg-transparent border-0 cursor-pointer p-0"
              >
                {isApproved ? "Exit Trade View" : "Preview Trade View"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
