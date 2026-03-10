import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Designer Trade program transformed how we source for our residential projects. The savings on Rikumo's collection have become a meaningful part of our design budget.",
    name: "Sarah Nakamura",
    title: "Principal, Nakamura Interiors",
    location: "Brooklyn, NY",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "We specify Rikumo products for nearly every hospitality project. The quality is exceptional and the trade pricing makes it viable at scale.",
    name: "David Chen",
    title: "Design Director, Studio Maru",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  },
  {
    quote:
      "From application to approval, the process was seamless. Now I can offer my clients beautiful Japanese home goods at a price point that works for every project.",
    name: "Emily Park",
    title: "Founder, Park & Oak Design",
    location: "Philadelphia, PA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-warm-100/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left — image + nav */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-6"
                />
                <p className="font-serif text-xl text-warm-900 mb-1">
                  {t.name}
                </p>
                <p className="text-warm-500 text-sm">{t.title}</p>
                <p className="text-warm-400 text-xs mt-0.5">{t.location}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-900 hover:text-white hover:border-warm-900 transition-all cursor-pointer bg-transparent"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-900 hover:text-white hover:border-warm-900 transition-all cursor-pointer bg-transparent"
              >
                <ArrowRight size={16} />
              </button>
              <span className="text-warm-400 text-xs ml-2">
                {active + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>

          {/* Right — quote */}
          <div className="md:col-span-7 md:col-start-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-warm-400" />
                  <span className="text-warm-400 text-[11px] tracking-[0.35em] uppercase">
                    Trade Partner
                  </span>
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-warm-900 leading-snug">
                  "{t.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
