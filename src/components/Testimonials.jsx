import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Designer Trade program transformed how we source for our residential projects. The savings on Rikumo's collection have become a meaningful part of our design budget.",
    name: "Sarah Nakamura",
    title: "Principal, Nakamura Interiors",
    location: "Brooklyn, NY",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "We specify Rikumo products for nearly every hospitality project. The quality is exceptional and the trade pricing makes it viable at scale.",
    name: "David Chen",
    title: "Design Director, Studio Maru",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  },
  {
    quote:
      "From application to approval, the process was seamless. Now I can offer my clients beautiful Japanese home goods at a price point that works for every project.",
    name: "Emily Park",
    title: "Founder, Park & Oak Design",
    location: "Philadelphia, PA",
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
              Testimonials
            </p>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-serif text-[20px] md:text-[24px] text-warm-700 leading-[1.4] mb-6"
                style={{ fontWeight: 400, fontStyle: "italic" }}
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-8"
              >
                <p className="text-warm-700 text-[13px]" style={{ fontWeight: 500 }}>{t.name}</p>
                <p className="text-warm-500 text-[12px]">{t.title}</p>
                <p className="text-warm-400 text-[12px]">{t.location}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center gap-2">
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
