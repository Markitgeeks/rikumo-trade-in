export default function Footer() {
  return (
    <footer className="bg-warm-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-2xl tracking-[0.15em]">RIKUMO</span>
            <p className="text-warm-500 text-sm mt-3 leading-relaxed max-w-xs">
              Japanese-inspired goods for everyday living. Thoughtfully curated
              from artisans across Japan.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[11px] tracking-[0.2em] uppercase text-warm-500 mb-4">
              Shop
            </p>
            <div className="space-y-2.5">
              {["New Arrivals", "Bath", "Kitchen", "Fragrance"].map((l) => (
                <a
                  key={l}
                  href="https://rikumo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-warm-400 text-sm hover:text-white transition-colors no-underline"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-warm-500 mb-4">
              Programs
            </p>
            <div className="space-y-2.5">
              <a href="#programs" className="block text-warm-400 text-sm hover:text-white transition-colors no-underline">
                Designer Trade
              </a>
              <a
                href="https://morihata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-warm-400 text-sm hover:text-white transition-colors no-underline"
              >
                Wholesale
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-warm-500 mb-4">
              Contact
            </p>
            <div className="space-y-2.5 text-warm-400 text-sm">
              <p>info@morihata.com</p>
              <p>Philadelphia, PA</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-warm-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-600 text-xs">
            &copy; {new Date().getFullYear()} Rikumo. All rights reserved.
          </p>
          <p className="text-warm-700 text-[10px] tracking-wide">
            UX concept demo for stakeholder review
          </p>
        </div>
      </div>
    </footer>
  );
}
