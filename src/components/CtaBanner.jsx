import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({ onApplyClick }) {
  return (
    <section className="py-16 md:py-20 bg-sage-50 border-y border-sage-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sage-600 text-xs tracking-[0.3em] uppercase mb-3">
            Ready to Get Started?
          </p>
          <h3 className="font-serif text-2xl md:text-4xl font-light text-warm-900 mb-4">
            Apply for Designer Trade Today
          </h3>
          <p className="text-warm-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Join hundreds of design professionals who source from Rikumo.
            Applications are reviewed within 2-3 business days.
          </p>
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-sage-500 text-white text-sm tracking-widest uppercase font-medium hover:bg-sage-600 transition-all duration-300 cursor-pointer border-0 group"
          >
            Apply Now — It's Free
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p className="text-warm-400 text-[11px] mt-4">
            No commitment required. Takes under 3 minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
