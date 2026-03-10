import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Tag, Heart } from "lucide-react";

const products = [
  {
    name: "Binchotan Charcoal Body Scrub Towel",
    category: "Bath",
    retail: 38,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Hasami Porcelain Mug — Natural",
    category: "Kitchen",
    retail: 42,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Hinoki Wood Bath Mat",
    category: "Bath",
    retail: 185,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Sashiko Linen Tea Towel Set",
    category: "Kitchen",
    retail: 56,
    eligible: false,
    image:
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Kihara Porcelain Plate — Indigo",
    category: "Tableware",
    retail: 64,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Washi Paper Incense — Hinoki",
    category: "Fragrance",
    retail: 28,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&h=600&fit=crop&q=80",
  },
];

function formatPrice(n) {
  return `$${n.toFixed(0)}`;
}

function tradePrice(n) {
  return n * 0.85;
}

function ProductCard({ product, isApproved, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-warm-100 mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer border-0 hover:bg-white"
        >
          <Heart
            size={15}
            className={liked ? "text-red-500" : "text-warm-600"}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* Trade badge */}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sage-900/80 to-transparent px-4 py-3"
          >
            <span className="text-white text-[10px] tracking-[0.15em] uppercase flex items-center gap-1.5">
              <Tag size={10} />
              Trade Eligible — Save {formatPrice(product.retail - tradePrice(product.retail))}
            </span>
          </motion.div>
        )}
        {isApproved && !product.eligible && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-900/60 to-transparent px-4 py-3">
            <span className="text-warm-300 text-[10px] tracking-[0.15em] uppercase">
              Retail pricing only
            </span>
          </div>
        )}
      </div>

      <p className="text-[10px] text-warm-400 tracking-[0.2em] uppercase mb-2">
        {product.category}
      </p>
      <h4 className="text-sm text-warm-900 mb-3 leading-snug group-hover:text-sage-600 transition-colors">
        {product.name}
      </h4>

      <div className="flex items-baseline gap-2.5">
        {isApproved && product.eligible ? (
          <>
            <span className="text-sage-600 font-medium">
              {formatPrice(tradePrice(product.retail))}
            </span>
            <span className="text-warm-300 line-through text-sm">
              {formatPrice(product.retail)}
            </span>
          </>
        ) : (
          <span className="text-warm-800 font-medium">
            {formatPrice(product.retail)}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ProductShowcase({ isApproved }) {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-warm-400" />
              <span className="text-warm-400 text-[11px] tracking-[0.35em] uppercase">
                {isApproved ? "Trade Collection" : "Featured Products"}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-warm-900 leading-tight">
              {isApproved ? (
                <>
                  Your trade
                  <br />
                  <em className="not-italic text-sage-600">pricing</em>
                </>
              ) : (
                <>
                  Curated
                  <br />
                  collection
                </>
              )}
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            {isApproved && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 bg-sage-50 px-4 py-2 text-sage-600 text-[12px] tracking-wide"
              >
                <ShieldCheck size={14} />
                Designer Trade pricing active
              </motion.div>
            )}
            <p className="text-warm-400 text-xs">
              * 15% trade discount applies to eligible products only
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 lg:gap-x-8 lg:gap-y-14">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
              product={product}
              isApproved={isApproved}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
