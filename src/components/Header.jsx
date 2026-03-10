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
            <div className="max-w-[1300px] mx-auto px-[30px] py-2 flex items-center justify-center gap-2 text-[12px] tracking-wide">
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
        <div className="max-w-[1300px] mx-auto px-[30px] flex items-center justify-between h-[60px]">
          {/* Left — nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Shop", href: "https://rikumo.com/collections/yuka-picks" },
              { label: "Journal", href: "https://rikumo.com/blogs/journal" },
              { label: "About", href: "https://rikumo.com/pages/about" },
              { label: "Wholesale", href: "https://morihata.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[13px] text-warm-700 hover:text-black no-underline transition-colors"
                style={{ fontWeight: 400 }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1 cursor-pointer bg-transparent border-0 text-warm-700"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center — Logo */}
          <a href="#" className="no-underline absolute left-1/2 -translate-x-1/2 text-center">
            <span
              className="font-serif text-[24px] text-warm-700 block leading-none"
              style={{ fontWeight: 400, letterSpacing: "0.12em" }}
            >
              rikumo
            </span>
            <span className="text-[8px] tracking-[0.25em] uppercase text-warm-400 block mt-0.5">
              Japan Made
            </span>
          </a>

          {/* Right — icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleApproved}
              className="hidden lg:inline-flex items-center gap-1.5 text-[12px] text-warm-500 hover:text-warm-700 transition-colors cursor-pointer bg-transparent border-0 p-0"
              title={isApproved ? "Exit Trade View" : "Preview Trade View"}
            >
              <ShieldCheck size={14} />
              {isApproved ? "Trade Active" : "Trade Preview"}
            </button>
            <span className="hidden md:inline text-[12px] text-warm-500">EN</span>
            <Search size={17} className="text-warm-700 cursor-pointer hover:text-black transition-colors hidden md:block" strokeWidth={1.5} />
            <User size={17} className="text-warm-700 cursor-pointer hover:text-black transition-colors hidden md:block" strokeWidth={1.5} />
            <div className="flex items-center gap-1.5">
              <ShoppingBag size={17} className="text-warm-700 cursor-pointer hover:text-black transition-colors" strokeWidth={1.5} />
              <span className="text-[12px] text-warm-700 hidden md:inline">$280.30</span>
            </div>
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
              <div className="px-[30px] py-6 space-y-4">
                {[
                  { label: "Shop", href: "https://rikumo.com/collections/yuka-picks" },
                  { label: "Journal", href: "https://rikumo.com/blogs/journal" },
                  { label: "About", href: "https://rikumo.com/pages/about" },
                  { label: "Wholesale", href: "https://morihata.com" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[14px] text-warm-600 no-underline"
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
