import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FileText, Search, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Apply",
    description:
      "Complete a short application with your business details and portfolio. Takes under 3 minutes.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=500&fit=crop&q=80",
  },
  {
    icon: Search,
    num: "02",
    title: "Review",
    description:
      "Our team reviews your credentials and verifies your design practice. Typically 2-3 business days.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop&q=80",
  },
  {
    icon: CheckCircle,
    num: "03",
    title: "Approval",
    description:
      "Approved accounts are tagged in our system. You'll receive a confirmation email with your trade details.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=500&fit=crop&q=80",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Shop & Save",
    description:
      "Log in to see exclusive 15% trade pricing automatically applied on all eligible products.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop&q=80",
  },
];

export default function ProcessFlow() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to active step
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Activate steps as user scrolls through the section
    // 0.2 = entering view, 0.8 = leaving view
    const progress = Math.max(0, Math.min(1, (v - 0.15) / 0.55));
    const stepIndex = Math.min(3, Math.floor(progress * 4));
    setActiveStep(stepIndex);
  });

  // Progress bar height
  const progressHeight = useTransform(
    scrollYProgress,
    [0.15, 0.7],
    ["0%", "100%"]
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-16 md:gap-10">
          {/* Left — sticky heading + image */}
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-warm-600" />
                <span className="text-warm-500 text-[11px] tracking-[0.35em] uppercase">
                  How It Works
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-4">
                From application
                <br />
                to{" "}
                <em className="not-italic text-sage-400">trade pricing</em>
              </h2>
              <p className="text-warm-400 text-sm leading-relaxed mb-8">
                A straightforward process designed to get you access to designer
                pricing as quickly as possible.
              </p>
            </motion.div>

            {/* Dynamic image that changes with active step */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm hidden md:block">
              {steps.map((step, i) => (
                <motion.img
                  key={step.num}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={false}
                  animate={{
                    opacity: activeStep === i ? 1 : 0,
                    scale: activeStep === i ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
              {/* Step counter overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-warm-900 text-[11px] tracking-wide font-medium rounded-sm">
                Step {steps[activeStep].num} of 04
              </div>
            </div>
          </div>

          {/* Right — steps with scroll-driven progress */}
          <div className="md:col-span-6 md:col-start-7 relative">
            {/* Vertical progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-warm-800 hidden md:block">
              <motion.div
                className="w-full bg-sage-400 origin-top"
                style={{ height: progressHeight }}
              />
            </div>

            <div className="space-y-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 py-10 md:py-12"
                  >
                    {/* Step circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <motion.div
                        animate={{
                          backgroundColor: isCurrent
                            ? "rgb(90, 115, 80)"
                            : isActive
                            ? "rgba(90, 115, 80, 0.2)"
                            : "transparent",
                          borderColor: isCurrent
                            ? "rgb(90, 115, 80)"
                            : isActive
                            ? "rgb(90, 115, 80)"
                            : "rgb(62, 57, 52)",
                          scale: isCurrent ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                      >
                        <Icon
                          size={18}
                          className={
                            isCurrent
                              ? "text-white"
                              : isActive
                              ? "text-sage-400"
                              : "text-warm-600"
                          }
                        />
                      </motion.div>
                    </div>

                    {/* Step content */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isCurrent ? 0 : 4,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span
                        className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-400 ${
                          isCurrent ? "text-sage-400" : "text-warm-600"
                        }`}
                      >
                        Step {step.num}
                      </span>
                      <h3
                        className={`font-serif text-2xl mt-1 mb-3 transition-colors duration-400 ${
                          isCurrent ? "text-white" : "text-warm-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-warm-400 text-sm leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
