import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Menu, X, Search, User, ShoppingBag } from "lucide-react";

export default function Header({ isApproved, onToggleApproved }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Trade banner */}
      <AnimatePresence>
        {isApproved && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-warm-700 text-white overflow-hidden"
          >
            <div className="max-w-[1300px] mx-auto px-8 py-2.5 flex items-center justify-center gap-2 text-[12px] tracking-wide">
              <ShieldCheck size={13} />
              Designer Trade Account Active — 15% off eligible products
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className="sticky top-0 z-50 bg-cream"
        style={{ borderBottom: "1px solid rgba(32,32,32,0.1)" }}
      >
        <div className="max-w-[1300px] mx-auto px-8 flex items-center justify-between h-[64px]">
          {/* Left — hamburger + links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1 cursor-pointer bg-transparent border-0 text-warm-700"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden md:flex items-center gap-7">
              {[
                { label: "Shop", href: "https://rikumo.com/collections/yuka-picks" },
                { label: "Programs", href: "#programs" },
                { label: "How It Works", href: "#process" },
                { label: "Wholesale", href: "https://morihata.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[14px] text-warm-700 hover:text-black no-underline transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center — Logo */}
          <a href="#" className="no-underline absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-[22px] font-bold tracking-[0.06em] text-warm-700">
              Rikumo
            </span>
          </a>

          {/* Right — icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={onToggleApproved}
              className="hidden md:inline-flex items-center gap-1.5 text-[12px] tracking-wide text-warm-700 hover:text-black transition-colors cursor-pointer bg-transparent border-0 p-0"
              title={isApproved ? "Exit Trade View" : "Preview Trade View"}
            >
              <ShieldCheck size={16} />
              <span className="hidden lg:inline">
                {isApproved ? "Trade Active" : "Trade Preview"}
              </span>
            </button>
            <Search size={18} className="text-warm-500 cursor-pointer hover:text-warm-700 transition-colors hidden md:block" />
            <User size={18} className="text-warm-500 cursor-pointer hover:text-warm-700 transition-colors hidden md:block" />
            <ShoppingBag size={18} className="text-warm-500 cursor-pointer hover:text-warm-700 transition-colors" />
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border overflow-hidden bg-cream"
            >
              <div className="px-8 py-6 space-y-4">
                {[
                  { label: "Shop", href: "https://rikumo.com/collections/yuka-picks" },
                  { label: "Programs", href: "#programs" },
                  { label: "How It Works", href: "#process" },
                  { label: "Collection", href: "#collection" },
                  { label: "Wholesale", href: "https://morihata.com" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[14px] text-warm-600 no-underline tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => { onToggleApproved(); setMobileOpen(false); }}
                  className="text-[13px] text-warm-700 bg-transparent border-0 cursor-pointer p-0 underline underline-offset-4"
                >
                  {isApproved ? "Exit Trade View" : "Preview Trade View"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
