import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WholesaleBlock() {
  return (
    <section className="py-24 md:py-32 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=750&fit=crop&q=80"
                alt="Wholesale"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-warm-400" />
              <span className="text-warm-400 text-[11px] tracking-[0.35em] uppercase">
                Wholesale
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-900 mb-4 leading-tight">
              Looking for volume
              <br />
              pricing?
            </h2>

            <p className="text-warm-500 text-sm leading-relaxed mb-8 max-w-md">
              For wholesale purchasing and retail partner accounts, our sister
              brand <strong className="text-warm-800">Morihata</strong> handles
              all B2B relationships with dedicated account management, NET terms,
              and full product catalog access.
            </p>

            <a
              href="https://morihata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[13px] tracking-[0.08em] text-warm-900 font-medium no-underline pb-1 border-b border-warm-900 hover:border-sage-500 hover:text-sage-600 transition-colors"
            >
              Visit Morihata.com
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
