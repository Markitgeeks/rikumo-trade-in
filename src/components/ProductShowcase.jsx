import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Tag, Heart, Eye, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Binchotan Charcoal Body Scrub Towel",
    category: "Bath",
    retail: 38,
    eligible: true,
    badge: "BEST SELLER",
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
    badge: "BEST SELLER",
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
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Tochi Wood Serving Bowl",
    category: "Kitchen",
    retail: 120,
    eligible: true,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=600&fit=crop&q=80",
  },
  {
    name: "Linen Kaya Cloth — Set of 3",
    category: "Textiles",
    retail: 34,
    eligible: false,
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&h=600&fit=crop&q=80",
  },
];

function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function tradePrice(n) {
  return n * 0.85;
}

function ProductCard({ product, isApproved, index }) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4 rounded-[5px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />

        {/* Hover overlay with Add to Cart */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0"
            >
              <motion.button
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ delay: 0.02 }}
                className="absolute bottom-3 left-3 right-3 py-2.5 bg-warm-700 text-white text-[12px] tracking-[0.1em] uppercase flex items-center justify-center gap-2 cursor-pointer border-0 rounded-[5px] hover:bg-warm-900 transition-colors"
              >
                <ShoppingCart size={13} />
                Add to Cart
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badges */}
        {product.badge && !isApproved && (
          <div className="absolute top-3 left-3 bg-warm-700 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-[3px]">
            {product.badge}
          </div>
        )}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 left-3 bg-sage-600 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 flex items-center gap-1 rounded-[3px]"
          >
            <Tag size={10} />
            Trade
          </motion.div>
        )}
        {isApproved && !product.eligible && (
          <div className="absolute top-3 left-3 bg-warm-500 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-[3px]">
            Retail Only
          </div>
        )}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-sage-600 text-[10px] font-medium px-2.5 py-1 rounded-[3px]"
          >
            Save {formatPrice(product.retail - tradePrice(product.retail))}
          </motion.div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all cursor-pointer border-0 ${
            isApproved && product.eligible ? "top-12" : ""
          } ${
            liked
              ? "bg-red-500 text-white"
              : "bg-white/80 text-warm-600 hover:bg-white"
          }`}
        >
          <Heart size={13} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="text-[11px] text-warm-400 tracking-[0.12em] uppercase mb-1.5">
        {product.category}
      </p>
      <h4 className="text-[14px] text-warm-700 mb-2 leading-snug">
        {product.name}
      </h4>

      <div className="flex items-baseline gap-2">
        {isApproved && product.eligible ? (
          <>
            <span className="text-sage-600 font-medium text-[15px]">
              {formatPrice(tradePrice(product.retail))}
            </span>
            <span className="text-warm-400 line-through text-[13px]">
              {formatPrice(product.retail)}
            </span>
            <span className="text-sage-600 text-[11px] tracking-wide">
              15% off
            </span>
          </>
        ) : (
          <span className="text-warm-700 font-medium text-[15px]">
            {formatPrice(product.retail)}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ProductShowcase({ isApproved }) {
  return (
    <section id="collection" className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-8 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-warm-500 text-[12px] tracking-[0.15em] uppercase mb-3">
              {isApproved ? "Trade Collection" : "New Arrivals"}
            </p>
            <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-warm-700 leading-[1.1]">
              {isApproved ? (
                <>
                  Your trade <em className="font-normal">pricing</em>
                </>
              ) : (
                <>
                  Curated <em className="font-normal">collection</em>
                </>
              )}
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            {isApproved && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-sage-600 text-[13px]"
              >
                <ShieldCheck size={14} />
                Designer Trade pricing active
              </motion.div>
            )}
            <p className="text-warm-400 text-[12px]">
              {isApproved
                ? "* 15% trade discount applies to eligible products only"
                : "View All"}
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 md:gap-y-12">
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
