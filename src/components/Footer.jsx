export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="max-w-[1300px] mx-auto px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-serif text-[20px] font-bold text-warm-900 tracking-wide">
              Rikumo
            </span>
            <p className="text-warm-500 text-[14px] mt-3 leading-[1.6] max-w-xs">
              Japanese-inspired goods for everyday living. Thoughtfully curated
              from artisans across Japan.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-4">
              Shop
            </p>
            <div className="space-y-2">
              {["New Arrivals", "Bath", "Kitchen", "Fragrance"].map((l) => (
                <a
                  key={l}
                  href="https://rikumo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-warm-600 text-[14px] hover:text-warm-900 transition-colors no-underline"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-4">
              Programs
            </p>
            <div className="space-y-2">
              <a
                href="#programs"
                className="block text-warm-600 text-[14px] hover:text-warm-900 transition-colors no-underline"
              >
                Designer Trade
              </a>
              <a
                href="https://morihata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-warm-600 text-[14px] hover:text-warm-900 transition-colors no-underline"
              >
                Wholesale
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] tracking-wide uppercase text-warm-400 mb-4">
              Contact
            </p>
            <div className="space-y-2 text-warm-600 text-[14px]">
              <p>info@morihata.com</p>
              <p>Philadelphia, PA</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-warm-400 text-[12px]">
            &copy; {new Date().getFullYear()} Rikumo. All rights reserved.
          </p>
          <p className="text-warm-400 text-[11px]">
            UX concept demo for stakeholder review
          </p>
        </div>
      </div>
    </footer>
  );
}
