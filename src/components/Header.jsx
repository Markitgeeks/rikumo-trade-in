import { motion } from "framer-motion";
import { User, ShieldCheck } from "lucide-react";

export default function Header({ isApproved, onToggleApproved }) {
  return (
    <header className="border-b border-warm-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="no-underline">
          <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-warm-900">
            RIKUMO
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-warm-600">
          <a href="#paths" className="hover:text-warm-900 transition-colors no-underline">
            Programs
          </a>
          <a href="#products" className="hover:text-warm-900 transition-colors no-underline">
            Products
          </a>
          <a href="#process" className="hover:text-warm-900 transition-colors no-underline">
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleApproved}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer border ${
              isApproved
                ? "bg-sage-500 text-white border-sage-500"
                : "bg-warm-100 text-warm-600 border-warm-200 hover:border-warm-400"
            }`}
          >
            {isApproved ? (
              <>
                <ShieldCheck size={14} />
                Designer Trade Approved
              </>
            ) : (
              <>
                <User size={14} />
                Toggle Approved View
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
