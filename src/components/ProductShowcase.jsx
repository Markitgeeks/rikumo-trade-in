import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Tag, Heart, Eye, ShoppingCart } from "lucide-react";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-warm-100 mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Hover action buttons */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-warm-900/15"
            >
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <motion.button
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ delay: 0 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-900 hover:text-white transition-colors cursor-pointer border-0"
                  title="Quick view"
                >
                  <Eye size={15} />
                </motion.button>
                <motion.button
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ delay: 0.04 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-900 hover:text-white transition-colors cursor-pointer border-0"
                  title="Add to cart"
                >
                  <ShoppingCart size={15} />
                </motion.button>
                <motion.button
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  transition={{ delay: 0.08 }}
                  onClick={() => setLiked(!liked)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer border-0 ${
                    liked
                      ? "bg-red-500 text-white"
                      : "bg-white hover:bg-warm-900 hover:text-white"
                  }`}
                  title="Add to wishlist"
                >
                  <Heart size={15} fill={liked ? "currentColor" : "none"} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trade eligible badge */}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-3 right-3 bg-sage-500 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 flex items-center gap-1"
          >
            <Tag size={10} />
            Trade
          </motion.div>
        )}
        {isApproved && !product.eligible && (
          <div className="absolute top-3 right-3 bg-warm-600/80 text-white text-[10px] tracking-[0.12em] uppercase px-2.5 py-1">
            Retail Only
          </div>
        )}

        {/* Savings callout */}
        {isApproved && product.eligible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-sage-700 text-[11px] font-medium px-2.5 py-1"
          >
            Save {formatPrice(product.retail - tradePrice(product.retail))}
          </motion.div>
        )}

        {/* Liked indicator */}
        {liked && !hovered && (
          <div className="absolute top-3 right-3">
            <Heart size={16} className="text-red-500" fill="currentColor" />
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
            <span className="text-sage-600 font-semibold text-[15px]">
              {formatPrice(tradePrice(product.retail))}
            </span>
            <span className="text-warm-300 line-through text-sm">
              {formatPrice(product.retail)}
            </span>
            <span className="text-sage-500 text-[10px] tracking-wider uppercase font-medium bg-sage-50 px-1.5 py-0.5">
              15% off
            </span>
          </>
        ) : (
          <span className="text-warm-800 font-medium text-[15px]">
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 bg-sage-50 border border-sage-200 px-5 py-2.5 text-sage-600 text-[12px] tracking-wide rounded-full"
              >
                <ShieldCheck size={14} />
                Designer Trade pricing active
              </motion.div>
            )}
            <p className="text-warm-400 text-xs">
              {isApproved
                ? "* 15% trade discount applies to eligible products only. Hover to interact."
                : "* Hover over products to interact"}
            </p>
          </div>
        </motion.div>

        {/* Grid — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-14">
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
