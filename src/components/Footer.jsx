export default function Footer() {
  return (
    <footer
      className="bg-cream"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-[30px] py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-12">
          {/* Store info with image */}
          <div className="md:col-span-3">
            <div className="w-full aspect-[4/3] overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=300&fit=crop&q=80"
                alt="Rikumo store"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 text-warm-500 text-[13px]">
              <p>19 W. Lancaster Ave.</p>
              <p>Ardmore, PA 19003</p>
              <p className="mt-2">Open Monday to Sunday,</p>
              <p>10:30 a.m. – 5:30 p.m.</p>
              <p className="mt-2">info@rikumo.com</p>
            </div>
          </div>

          {/* Our Store */}
          <div className="md:col-span-2 md:col-start-5">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-400 mb-4">
              Our Store
            </p>
            <div className="space-y-2.5">
              {["Visit the Store", "FAQs", "Gift Cards", "In-Store Pickup", "Shipping + Processing", "Sitemap"].map((l) => (
                <a
                  key={l}
                  href="https://rikumo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-warm-500 text-[13px] hover:text-warm-700 transition-colors no-underline"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Our Company */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-400 mb-4">
              Our Company
            </p>
            <div className="space-y-2.5">
              {[
                { label: "About Us", href: "https://rikumo.com/pages/about" },
                { label: "Wholesale", href: "https://morihata.com" },
                { label: "Careers", href: "https://rikumo.com" },
                { label: "Press", href: "https://rikumo.com" },
                { label: "Ambassador Program", href: "https://rikumo.com" },
                { label: "Contact Us", href: "mailto:info@rikumo.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-warm-500 text-[13px] hover:text-warm-700 transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-400 mb-4">
              Stay Close to Craft.
            </p>
            <p className="text-warm-500 text-[13px] leading-[1.6] mb-4">
              Receive 10% off your first order and weekly inspiration from Japan.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2.5 bg-white border border-border text-[13px] text-warm-700 placeholder:text-warm-400 focus:outline-none focus:border-warm-400 transition-colors min-w-0"
              />
              <button className="px-4 py-2.5 bg-warm-700 text-white text-[11px] tracking-wide border-0 cursor-pointer hover:bg-warm-900 transition-colors">
                Join
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {["Facebook", "Instagram", "Pinterest", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-warm-400 hover:text-warm-700 transition-colors text-[12px] no-underline"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
        >
          <div className="flex items-center gap-4 text-warm-400 text-[11px]">
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Returns Policy</a>
          </div>
          <p className="text-warm-400 text-[11px]">
            &copy; rikumo {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
