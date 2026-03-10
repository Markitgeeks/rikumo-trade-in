import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WholesaleBlock() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=700&h=525&fit=crop&q=80"
                alt="Wholesale"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-warm-400 text-[11px] tracking-[0.15em] uppercase mb-3">
              Wholesale Partnerships
            </p>
            <h2
              className="font-serif text-[24px] md:text-[28px] text-warm-700 leading-[1.2] mb-4"
              style={{ fontWeight: 400 }}
            >
              Bring the spirit of Japanese
              <br />
              <em>craftsmanship to your store.</em>
            </h2>
            <p className="text-warm-500 text-[14px] leading-[1.6] mb-8 max-w-md">
              For wholesale purchasing and retail partner accounts, our sister
              brand Morihata handles all B2B relationships with dedicated
              account management, NET terms, and full catalog access.
            </p>
            <a
              href="https://morihata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-warm-700 text-white text-[12px] tracking-wide no-underline hover:bg-warm-900 transition-colors rounded-full"
            >
              Apply As A Retailer
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
