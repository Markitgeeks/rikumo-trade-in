import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";

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
            className="bg-black text-white overflow-hidden"
          >
            <div className="max-w-[1300px] mx-auto px-8 py-2.5 flex items-center justify-center gap-2 text-[12px]">
              <ShieldCheck size={13} />
              Designer Trade Account Active — 15% off eligible products
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className="sticky top-0 z-50 bg-white"
        style={{ boxShadow: "0 6px 6px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-[1300px] mx-auto px-8 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="#" className="no-underline">
            <span className="font-serif text-[24px] font-bold italic text-black">
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
                className="text-[14px] text-warm-700 hover:text-black no-underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleApproved}
              className={`text-[13px] px-5 py-2.5 transition-all cursor-pointer ${
                isApproved
                  ? "bg-black text-white border border-black"
                  : "bg-white text-black border border-border hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              {isApproved ? "Trade Account Active" : "Preview Trade View"}
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer bg-transparent border-0 text-black"
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
              className="md:hidden border-t border-border overflow-hidden bg-white"
            >
              <div className="px-8 py-6 space-y-4">
                {["Programs", "How It Works", "Collection"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[14px] text-warm-600 no-underline"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { onToggleApproved(); setMobileOpen(false); }}
                  className="text-[13px] text-black bg-transparent border-0 cursor-pointer p-0 underline"
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
