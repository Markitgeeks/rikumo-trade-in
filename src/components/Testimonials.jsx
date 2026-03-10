import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Morihata Binchotan Eye Mask has become an essential part of my evening routine. The subtle weight and natural materials help me transition from a busy day to restful sleep.",
    name: "Chosen by Yuka",
    cta: "Discover Her Selection",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "The Designer Trade program transformed how we source for our residential projects. The savings on Rikumo's collection have become a meaningful part of our design budget.",
    name: "Sarah Nakamura",
    cta: "View Trade Program",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "From application to approval, the process was seamless. Now I can offer my clients beautiful Japanese home goods at a price point that works for every project.",
    name: "Emily Park",
    cta: "Apply for Trade",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="bg-cream-dark">
      <div className="max-w-[1300px] mx-auto px-[30px] py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Right — quote */}
          <div>
            <p className="text-warm-400 text-[11px] tracking-[0.15em] uppercase mb-5">
              {t.name}
            </p>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-serif text-[20px] md:text-[24px] text-warm-700 leading-[1.4] mb-8"
                style={{ fontWeight: 400, fontStyle: "italic" }}
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <a
              href="#programs"
              className="inline-block px-5 py-2.5 bg-warm-700 text-white text-[12px] tracking-wide no-underline hover:bg-warm-900 transition-colors rounded-full"
            >
              {t.cta}
            </a>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer border-0 ${
                    i === active ? "bg-warm-700" : "bg-warm-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
