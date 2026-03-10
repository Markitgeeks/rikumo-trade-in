import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Tag, Eye, ShoppingCart, Heart } from "lucide-react";

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

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

function tradePrice(retail) {
  return retail * 0.85;
}

function ProductCard({ product, isApproved, index }) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-warm-100 overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Hover overlay with actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-warm-900/20 flex items-end justify-center pb-4"
            >
              <div className="flex gap-2">
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-900 hover:text-white transition-colors cursor-pointer border-0"
                  title="Quick view"
                >
                  <Eye size={16} />
                </motion.button>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.05 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-warm-900 hover:text-white transition-colors cursor-pointer border-0"
                  title="Add to cart"
                >
                  <ShoppingCart size={16} />
                </motion.button>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setLiked(!liked)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer border-0 ${
                    liked
                      ? "bg-red-500 text-white"
                      : "bg-white hover:bg-warm-900 hover:text-white"
                  }`}
                  title="Wishlist"
                >
                  <Heart size={16} fill={liked ? "currentColor" : "none"} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badges */}
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

        {/* Wishlist heart on top-left */}
        {liked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 left-3"
          >
            <Heart size={18} className="text-red-500" fill="currentColor" />
          </motion.div>
        )}

        {/* Savings badge for approved */}
        {isApproved && product.eligible && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-sage-600 text-[11px] font-medium px-2 py-1">
            Save {formatPrice(product.retail - tradePrice(product.retail))}
          </div>
        )}
      </div>

      <p className="text-[11px] text-warm-400 uppercase tracking-wider mb-1">
        {product.category}
      </p>
      <h4 className="text-sm font-medium text-warm-900 mb-2 leading-snug group-hover:text-sage-600 transition-colors">
        {product.name}
      </h4>

      <div className="flex items-baseline gap-2">
        {isApproved && product.eligible ? (
          <>
            <span className="text-sage-600 font-semibold text-sm">
              {formatPrice(tradePrice(product.retail))}
            </span>
            <span className="text-warm-400 line-through text-xs">
              {formatPrice(product.retail)}
            </span>
            <span className="text-sage-500 text-[10px] tracking-wider uppercase font-medium bg-sage-50 px-1.5 py-0.5">
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
  );
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
              className="inline-flex items-center gap-2 bg-sage-50 border border-sage-200 px-5 py-2.5 rounded-full text-sm text-sage-600 mb-2"
            >
              <ShieldCheck size={16} />
              You're viewing Designer Trade pricing — 15% off eligible items
            </motion.div>
          )}
        </motion.div>

        <p className="text-center text-warm-400 text-xs mb-12">
          * Designer Trade discount (15% off) applies only to eligible products,
          not all items. Hover over products to interact.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
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
