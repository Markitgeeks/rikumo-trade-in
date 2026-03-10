import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({ onApplyClick }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-900/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
            Ready to access
            <br />
            designer pricing?
          </h2>
          <p className="text-warm-400 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
            Join 500+ design professionals who source from Rikumo. Free to
            apply, no commitment required.
          </p>
          <button
            onClick={onApplyClick}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-warm-900 text-[13px] tracking-[0.1em] uppercase font-medium hover:bg-sage-500 hover:text-white transition-all duration-400 cursor-pointer border-0"
          >
            Start Your Application
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p className="text-warm-600 text-[11px] mt-5 tracking-wide">
            Takes under 3 minutes &middot; Reviewed within 2-3 business days
          </p>
        </motion.div>
      </div>
    </section>
  );
}
