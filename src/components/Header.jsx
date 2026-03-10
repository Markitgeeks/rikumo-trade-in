import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";

export default function Header({ isApproved, onToggleApproved }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Approved banner */}
      <AnimatePresence>
        {isApproved && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-sage-600 text-white overflow-hidden"
          >
            <div className="max-w-[1300px] mx-auto px-8 py-2.5 flex items-center justify-center gap-2 text-[12px] tracking-wide">
              <ShieldCheck size={13} />
              Designer Trade Account Active — 15% off eligible products
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1300px] mx-auto px-8 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="#" className="no-underline">
            <span className="font-serif text-[22px] font-bold text-warm-900 tracking-wide">
              Rikumo
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Programs", href: "#programs" },
              { label: "How It Works", href: "#process" },
              { label: "Collection", href: "#collection" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] text-warm-700 hover:text-warm-900 no-underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleApproved}
              className={`text-[13px] px-5 py-2 transition-all cursor-pointer border ${
                isApproved
                  ? "bg-sage-600 text-white border-sage-600"
                  : "bg-transparent text-warm-700 border-border hover:border-warm-400"
              }`}
            >
              {isApproved ? "Trade Account Active" : "Preview Trade View"}
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer bg-transparent border-0 text-warm-900"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border overflow-hidden bg-cream"
            >
              <div className="px-8 py-6 space-y-4">
                {["Programs", "How It Works", "Collection"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[14px] text-warm-700 no-underline"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    onToggleApproved();
                    setMobileOpen(false);
                  }}
                  className="text-[13px] text-sage-600 bg-transparent border-0 cursor-pointer p-0"
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
