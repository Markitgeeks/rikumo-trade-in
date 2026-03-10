import { motion } from "framer-motion";
import { ShieldCheck, Tag } from "lucide-react";

const products = [
  {
    name: "Binchotan Charcoal Body Scrub Towel",
    category: "Bath",
    retail: 38,
    eligible: true,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Hasami Porcelain Mug — Natural",
    category: "Kitchen",
    retail: 42,
    eligible: true,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Hinoki Wood Bath Mat",
    category: "Bath",
    retail: 185,
    eligible: true,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Sashiko Linen Tea Towel Set",
    category: "Kitchen",
    retail: 56,
    eligible: false,
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=400&h=500&fit=crop&q=80",
  },
];

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

function tradePrice(retail) {
  return retail * 0.85;
}

export default function ProductShowcase({ isApproved }) {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-warm-500 text-xs tracking-[0.3em] uppercase mb-4">
            {isApproved ? "Your Designer Trade Pricing" : "Product Preview"}
          </p>
          <h3 className="font-serif text-3xl md:text-5xl font-light text-warm-900 mb-4">
            {isApproved ? "Exclusive Trade Pricing" : "Curated Collection"}
          </h3>
          {isApproved && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-sage-50 border border-sage-200 px-4 py-2 rounded-full text-sm text-sage-600 mb-2"
            >
              <ShieldCheck size={16} />
              You're viewing Designer Trade pricing
            </motion.div>
          )}
        </motion.div>

        <p className="text-center text-warm-400 text-xs mb-12">
          * Designer Trade discount (15% off) applies only to eligible products,
          not all items.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-warm-100 overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {isApproved && product.eligible && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-3 right-3 bg-sage-500 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 flex items-center gap-1"
                  >
                    <Tag size={10} />
                    Trade Eligible
                  </motion.div>
                )}
                {isApproved && !product.eligible && (
                  <div className="absolute top-3 right-3 bg-warm-500/80 text-white text-[10px] tracking-wider uppercase px-2.5 py-1">
                    Retail Only
                  </div>
                )}
              </div>

              <p className="text-xs text-warm-400 uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h4 className="text-sm font-medium text-warm-900 mb-2 leading-snug">
                {product.name}
              </h4>

              <div className="flex items-baseline gap-2">
                {isApproved && product.eligible ? (
                  <>
                    <span className="text-sage-600 font-medium text-sm">
                      {formatPrice(tradePrice(product.retail))}
                    </span>
                    <span className="text-warm-400 line-through text-xs">
                      {formatPrice(product.retail)}
                    </span>
                    <span className="text-sage-500 text-[10px] tracking-wider uppercase">
                      15% off
                    </span>
                  </>
                ) : (
                  <span className="text-warm-800 font-medium text-sm">
                    {formatPrice(product.retail)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
