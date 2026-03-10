import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
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
      "Our team reviews your credentials and verifies your design practice. Typically 2–3 business days.",
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

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const progress = Math.max(0, Math.min(1, (v - 0.15) / 0.55));
    const stepIndex = Math.min(3, Math.floor(progress * 4));
    setActiveStep(stepIndex);
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0.15, 0.7],
    ["0%", "100%"]
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-white"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)", borderBottom: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — sticky */}
          <div className="md:sticky md:top-[90px] md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-warm-500 text-[12px] tracking-[0.15em] uppercase mb-3">
                How It Works
              </p>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-warm-700 leading-[1.1] mb-4">
                From application
                <br />
                to <em className="font-normal">trade pricing</em>
              </h2>
              <p className="text-warm-500 text-[15px] leading-[1.6] mb-10 max-w-sm">
                A straightforward process designed to get you access to designer
                pricing as quickly as possible.
              </p>
            </motion.div>

            {/* Dynamic image */}
            <div className="relative aspect-[4/3] overflow-hidden hidden md:block bg-cream-dark rounded-[5px]">
              {steps.map((step, i) => (
                <motion.img
                  key={step.num}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={false}
                  animate={{
                    opacity: activeStep === i ? 1 : 0,
                    scale: activeStep === i ? 1 : 1.04,
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
              <div className="absolute bottom-0 left-0 bg-cream/90 backdrop-blur-sm px-4 py-2 text-[11px] text-warm-500 tracking-wide">
                Step {steps[activeStep].num} of 04
              </div>
            </div>
          </div>

          {/* Right — steps */}
          <div className="relative">
            {/* Progress track */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-warm-200 hidden md:block">
              <motion.div
                className="w-full bg-sage-500 origin-top"
                style={{ height: progressHeight }}
              />
            </div>

            <div>
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;

                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-6 py-8 md:py-10"
                  >
                    {/* Circle */}
                    <motion.div
                      animate={{
                        backgroundColor: isCurrent
                          ? "#28282a"
                          : isActive
                          ? "#f0efea"
                          : "#f6f4ef",
                        borderColor: isCurrent
                          ? "#28282a"
                          : isActive
                          ? "#d4d4d4"
                          : "#e5e5e5",
                      }}
                      transition={{ duration: 0.35 }}
                      className="flex-shrink-0 w-[48px] h-[48px] rounded-full border flex items-center justify-center relative z-10"
                    >
                      <Icon
                        size={18}
                        className={
                          isCurrent
                            ? "text-white"
                            : isActive
                            ? "text-warm-600"
                            : "text-warm-400"
                        }
                      />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-[11px] text-warm-400 tracking-[0.15em] uppercase mb-1">
                        Step {step.num}
                      </p>
                      <h3
                        className={`font-serif text-[22px] font-bold mb-2 transition-colors duration-300 ${
                          isCurrent ? "text-warm-700" : "text-warm-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-warm-500 text-[14px] leading-[1.6] max-w-sm">
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
