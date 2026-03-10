import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Send,
  Clock,
  Percent,
  Headphones,
  Truck,
} from "lucide-react";

const BUSINESS_TYPES = [
  "Interior Design Studio",
  "Architecture Firm",
  "Home Staging Company",
  "Design-Build Firm",
  "Set Design / Styling",
  "Hospitality Design",
  "Other",
];

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Mixed Use",
  "Other",
];

const PURCHASE_FREQUENCIES = [
  "One-time project",
  "1-2 times per year",
  "Quarterly",
  "Monthly",
  "Ongoing / as needed",
];

const inputClass =
  "w-full px-4 py-3 bg-warm-50 border border-warm-200 text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-sage-400 focus:bg-white focus:ring-2 focus:ring-sage-100 transition-all rounded-sm";

const selectClass =
  "w-full px-4 py-3 bg-warm-50 border border-warm-200 text-sm text-warm-900 focus:outline-none focus:border-sage-400 focus:bg-white focus:ring-2 focus:ring-sage-100 transition-all rounded-sm cursor-pointer appearance-none";

export default function ApplicationForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    setAgreed(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-warm-900/60 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="min-h-full flex items-start justify-center py-8 px-4 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative bg-white w-full max-w-xl shadow-2xl rounded-sm"
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-warm-400 hover:text-warm-900 transition-colors cursor-pointer bg-warm-50 hover:bg-warm-100 border-0 rounded-full z-20"
              >
                <X size={16} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header with value prop */}
                    <div className="px-7 md:px-10 pt-10 pb-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-sage-400" />
                        <span className="text-sage-500 text-[11px] tracking-[0.3em] uppercase font-medium">
                          Trade Program
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-[2rem] font-light text-warm-900 mb-3">
                        Apply for Designer Trade
                      </h3>
                      <p className="text-warm-500 text-sm leading-relaxed max-w-sm">
                        Fill out the form below. We'll review your application
                        and get back to you within 2-3 business days.
                      </p>

                      {/* Benefit pills */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {[
                          { icon: Percent, text: "15% off eligible items" },
                          { icon: Clock, text: "2-3 day review" },
                          { icon: Headphones, text: "Dedicated support" },
                          { icon: Truck, text: "Free shipping $250+" },
                        ].map(({ icon: Icon, text }) => (
                          <div
                            key={text}
                            className="flex items-center gap-1.5 bg-sage-50 text-sage-700 text-[11px] px-3 py-1.5 rounded-full"
                          >
                            <Icon size={11} />
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-px bg-warm-100" />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-7 md:px-10 py-8">
                      <div className="space-y-8">
                        {/* Section: About You */}
                        <div>
                          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-400 font-medium mb-4">
                            About You
                          </p>
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="text"
                                required
                                placeholder="First Name *"
                                className={inputClass}
                              />
                              <input
                                type="text"
                                required
                                placeholder="Last Name *"
                                className={inputClass}
                              />
                            </div>
                            <input
                              type="email"
                              required
                              placeholder="Email Address *"
                              className={inputClass}
                            />
                            <input
                              type="tel"
                              placeholder="Phone (optional)"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Section: Your Business */}
                        <div>
                          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-400 font-medium mb-4">
                            Your Business
                          </p>
                          <div className="space-y-3">
                            <input
                              type="text"
                              required
                              placeholder="Company / Studio Name *"
                              className={inputClass}
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="url"
                                placeholder="Website or Portfolio URL"
                                className={inputClass}
                              />
                              <input
                                type="text"
                                placeholder="Instagram (optional)"
                                className={inputClass}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <select required className={selectClass}>
                                <option value="">Business Type *</option>
                                {BUSINESS_TYPES.map((t) => (
                                  <option key={t} value={t}>
                                    {t}
                                  </option>
                                ))}
                              </select>
                              <select className={selectClass}>
                                <option value="">Project Type</option>
                                {PROJECT_TYPES.map((t) => (
                                  <option key={t} value={t}>
                                    {t}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Section: Location */}
                        <div>
                          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-400 font-medium mb-4">
                            Location
                          </p>
                          <div className="space-y-3">
                            <div className="grid grid-cols-5 gap-3">
                              <input
                                type="text"
                                required
                                placeholder="City *"
                                className={`${inputClass} col-span-2`}
                              />
                              <input
                                type="text"
                                required
                                placeholder="State *"
                                className={inputClass}
                              />
                              <input
                                type="text"
                                required
                                placeholder="Zip *"
                                className={inputClass}
                              />
                              <input
                                type="text"
                                required
                                placeholder="Country *"
                                className={inputClass}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Section: Additional (collapsed feel) */}
                        <div>
                          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-400 font-medium mb-4">
                            Additional Details
                          </p>
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <input
                                type="text"
                                placeholder="Resale Certificate / Tax ID"
                                className={inputClass}
                              />
                              <select className={selectClass}>
                                <option value="">Purchase Frequency</option>
                                {PURCHASE_FREQUENCIES.map((f) => (
                                  <option key={f} value={f}>
                                    {f}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <textarea
                              rows={2}
                              placeholder="Anything else you'd like us to know? (optional)"
                              className={`${inputClass} resize-none`}
                            />
                          </div>
                        </div>

                        {/* Terms */}
                        <div className="pt-2">
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <div className="mt-0.5 flex-shrink-0">
                              <div
                                className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all ${
                                  agreed
                                    ? "bg-sage-500 border-sage-500"
                                    : "border-warm-300 group-hover:border-warm-400"
                                }`}
                              >
                                {agreed && (
                                  <motion.svg
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                  >
                                    <path
                                      d="M2.5 6L5 8.5L9.5 3.5"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </motion.svg>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="sr-only"
                              />
                            </div>
                            <span className="text-[12px] text-warm-500 leading-relaxed">
                              I agree to Rikumo's Trade Program Terms. I
                              understand that submission does not guarantee
                              approval, and trade pricing applies only to
                              eligible products.
                            </span>
                          </label>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={!agreed}
                          className={`w-full py-4 text-[13px] tracking-[0.1em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border-0 rounded-sm ${
                            agreed
                              ? "bg-warm-900 text-white hover:bg-sage-600"
                              : "bg-warm-100 text-warm-400 cursor-not-allowed"
                          }`}
                        >
                          <Send size={14} />
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="px-7 md:px-10 py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.15,
                      }}
                      className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle2 size={30} className="text-sage-500" />
                    </motion.div>

                    <h3 className="font-serif text-2xl md:text-3xl font-light text-warm-900 mb-3">
                      Application Received
                    </h3>

                    <p className="text-warm-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                      We've sent your application to{" "}
                      <strong className="text-warm-700">
                        info@morihata.com
                      </strong>
                      . You'll hear back within 2-3 business days.
                    </p>

                    {/* Timeline */}
                    <div className="max-w-xs mx-auto text-left space-y-5 mb-10">
                      {[
                        {
                          num: "1",
                          title: "Application Review",
                          desc: "Our team verifies your credentials",
                        },
                        {
                          num: "2",
                          title: "Account Activation",
                          desc: "Your account is tagged for trade pricing",
                        },
                        {
                          num: "3",
                          title: "Start Saving",
                          desc: "Log in to see 15% off eligible products",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={item.num}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.15 }}
                          className="flex gap-4"
                        >
                          <div className="w-8 h-8 bg-sage-50 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600 text-xs font-medium border border-sage-200">
                            {item.num}
                          </div>
                          <div>
                            <p className="text-warm-900 text-sm font-medium">
                              {item.title}
                            </p>
                            <p className="text-warm-400 text-xs">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <button
                      onClick={handleClose}
                      className="px-8 py-3 bg-warm-900 text-white text-[13px] tracking-[0.08em] hover:bg-warm-800 transition-colors cursor-pointer border-0 rounded-sm"
                    >
                      Back to Rikumo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
