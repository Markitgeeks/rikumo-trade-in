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
  "w-full px-4 py-3 bg-cream border border-border text-[14px] text-black placeholder:text-warm-400 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-100 transition-all";

const selectClass =
  "w-full px-4 py-3 bg-cream border border-border text-[14px] text-black focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-100 transition-all cursor-pointer appearance-none";

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
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="min-h-full flex items-start justify-center py-8 px-4 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white w-full max-w-lg border border-border"
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-warm-400 hover:text-black transition-colors cursor-pointer bg-transparent border border-border hover:border-warm-400 z-20"
              >
                <X size={14} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header */}
                    <div className="px-8 pt-10 pb-6">
                      <p className="text-warm-500 text-[13px] tracking-wide mb-2">
                        Trade Program
                      </p>
                      <h3 className="font-serif text-[28px] font-bold text-black mb-2">
                        Apply for Designer Trade
                      </h3>
                      <p className="text-warm-500 text-[14px] leading-[1.6]">
                        We'll review your application within 2–3 business days.
                      </p>

                      {/* Benefit pills */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {[
                          { icon: Percent, text: "15% off eligible items" },
                          { icon: Clock, text: "2–3 day review" },
                          { icon: Headphones, text: "Dedicated support" },
                          { icon: Truck, text: "Free shipping $250+" },
                        ].map(({ icon: Icon, text }) => (
                          <span
                            key={text}
                            className="inline-flex items-center gap-1.5 bg-cream text-warm-600 text-[11px] px-3 py-1.5 border border-border"
                          >
                            <Icon size={11} className="text-sage-500" />
                            {text}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-8 py-7">
                      <div className="space-y-7">
                        {/* About You */}
                        <div>
                          <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-3">
                            About You
                          </p>
                          <div className="space-y-2.5">
                            <div className="grid grid-cols-2 gap-2.5">
                              <input type="text" required placeholder="First Name *" className={inputClass} />
                              <input type="text" required placeholder="Last Name *" className={inputClass} />
                            </div>
                            <input type="email" required placeholder="Email Address *" className={inputClass} />
                            <input type="tel" placeholder="Phone (optional)" className={inputClass} />
                          </div>
                        </div>

                        {/* Business */}
                        <div>
                          <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-3">
                            Your Business
                          </p>
                          <div className="space-y-2.5">
                            <input type="text" required placeholder="Company / Studio Name *" className={inputClass} />
                            <div className="grid grid-cols-2 gap-2.5">
                              <input type="url" placeholder="Website or Portfolio" className={inputClass} />
                              <input type="text" placeholder="Instagram" className={inputClass} />
                            </div>
                            <div className="grid grid-cols-2 gap-2.5">
                              <select required className={selectClass}>
                                <option value="">Business Type *</option>
                                {BUSINESS_TYPES.map((t) => (
                                  <option key={t} value={t}>{t}</option>
                                ))}
                              </select>
                              <select className={selectClass}>
                                <option value="">Project Type</option>
                                {PROJECT_TYPES.map((t) => (
                                  <option key={t} value={t}>{t}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Location */}
                        <div>
                          <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-3">
                            Location
                          </p>
                          <div className="grid grid-cols-5 gap-2.5">
                            <input type="text" required placeholder="City *" className={`${inputClass} col-span-2`} />
                            <input type="text" required placeholder="State *" className={inputClass} />
                            <input type="text" required placeholder="Zip *" className={inputClass} />
                            <input type="text" required placeholder="Country *" className={inputClass} />
                          </div>
                        </div>

                        {/* Additional */}
                        <div>
                          <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-3">
                            Additional
                          </p>
                          <div className="space-y-2.5">
                            <div className="grid grid-cols-2 gap-2.5">
                              <input type="text" placeholder="Resale Certificate / Tax ID" className={inputClass} />
                              <select className={selectClass}>
                                <option value="">Purchase Frequency</option>
                                {PURCHASE_FREQUENCIES.map((f) => (
                                  <option key={f} value={f}>{f}</option>
                                ))}
                              </select>
                            </div>
                            <textarea
                              rows={2}
                              placeholder="Anything else? (optional)"
                              className={`${inputClass} resize-none`}
                            />
                          </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-3 cursor-pointer">
                          <div className="mt-0.5 flex-shrink-0">
                            <div
                              className={`w-[18px] h-[18px] border flex items-center justify-center transition-all ${
                                agreed
                                  ? "bg-sage-600 border-sage-600"
                                  : "border-warm-300 hover:border-warm-400"
                              }`}
                            >
                              {agreed && (
                                <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="10" height="10" viewBox="0 0 12 12" fill="none">
                                  <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            I agree to Rikumo's Trade Program Terms. Submission
                            does not guarantee approval. Trade pricing applies to
                            eligible products only.
                          </span>
                        </label>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={!agreed}
                          className={`w-full py-3.5 text-[14px] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer border-0 ${
                            agreed
                              ? "bg-black text-white hover:opacity-80"
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
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-8 py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-14 h-14 bg-sage-50 border border-sage-200 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 size={28} className="text-sage-600" />
                    </motion.div>

                    <h3 className="font-serif text-[26px] font-bold text-black mb-2">
                      Application Received
                    </h3>
                    <p className="text-warm-500 text-[14px] leading-[1.6] max-w-sm mx-auto mb-8">
                      We've sent your application to{" "}
                      <strong className="text-warm-700">info@morihata.com</strong>.
                      You'll hear back within 2–3 business days.
                    </p>

                    <div className="max-w-xs mx-auto text-left space-y-4 mb-10">
                      {[
                        { n: "1", t: "Application Review", d: "We verify your credentials" },
                        { n: "2", t: "Account Activation", d: "Your account is tagged for trade pricing" },
                        { n: "3", t: "Start Saving", d: "Log in to see 15% off eligible products" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.n}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.12 }}
                          className="flex gap-3"
                        >
                          <div className="w-7 h-7 border border-sage-200 flex items-center justify-center flex-shrink-0 text-sage-600 text-[11px] font-medium bg-sage-50">
                            {item.n}
                          </div>
                          <div>
                            <p className="text-black text-[13px] font-medium">{item.t}</p>
                            <p className="text-warm-400 text-[12px]">{item.d}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <button
                      onClick={handleClose}
                      className="px-7 py-3 bg-warm-900 text-white text-[14px] hover:bg-warm-800 transition-colors cursor-pointer border-0"
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
