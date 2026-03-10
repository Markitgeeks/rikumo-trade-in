export default function Footer() {
  return (
    <footer className="bg-warm-50 border-t border-warm-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl tracking-wide text-warm-900 mb-1">
              RIKUMO
            </h2>
            <p className="text-warm-500 text-xs">
              Japanese-inspired goods for everyday living
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs text-warm-500">
            <span>Retail: rikumo.com</span>
            <span className="text-warm-300">|</span>
            <span>Wholesale: morihata.com</span>
            <span className="text-warm-300">|</span>
            <span>Trade inquiries: info@morihata.com</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-warm-200 text-center">
          <p className="text-warm-400 text-[11px] tracking-wide">
            This is a UX concept demo for stakeholder review. Not a production
            application.
          </p>
        </div>
      </div>
    </footer>
  );
}
