export default function Footer() {
  return (
    <footer
      className="bg-cream-dark"
      style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
    >
      <div className="max-w-[1300px] mx-auto px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          {/* Brand + store info */}
          <div className="md:col-span-4">
            <span className="font-serif text-[20px] font-bold text-warm-700 tracking-[0.04em]">
              Rikumo
            </span>
            <p className="text-warm-500 text-[14px] mt-3 leading-[1.6] max-w-xs">
              Japanese-inspired goods for everyday living. Thoughtfully curated
              from artisans across Japan.
            </p>
            <div className="mt-5 space-y-1 text-warm-400 text-[13px]">
              <p>19 W. Lancaster Ave. Ardmore, PA 19003</p>
              <p>Open Monday to Sunday, 10:30 a.m. – 5:30 p.m.</p>
              <p>info@rikumo.com</p>
            </div>
          </div>

          {/* Our Store */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-400 mb-4">
              Our Store
            </p>
            <div className="space-y-2.5">
              {["Visit the Store", "FAQs", "Gift Cards", "Shipping + Processing"].map((l) => (
                <a
                  key={l}
                  href="https://rikumo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-warm-500 text-[14px] hover:text-warm-700 transition-colors no-underline"
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
                { label: "About Us", href: "https://rikumo.com" },
                { label: "Wholesale", href: "https://morihata.com" },
                { label: "Designer Trade", href: "#programs" },
                { label: "Contact Us", href: "mailto:info@rikumo.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-warm-500 text-[14px] hover:text-warm-700 transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-warm-400 mb-4">
              Stay Close to Craft
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
              <button className="px-4 py-2.5 bg-warm-700 text-white text-[12px] tracking-wide border-0 cursor-pointer hover:bg-warm-900 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mb-8">
          {["Facebook", "Instagram", "Pinterest", "TikTok"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-warm-400 hover:text-warm-700 transition-colors text-[13px] no-underline"
            >
              {social}
            </a>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(32,32,32,0.1)" }}
        >
          <div className="flex items-center gap-4 text-warm-400 text-[12px]">
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-warm-600 no-underline text-warm-400 transition-colors">Returns Policy</a>
          </div>
          <p className="text-warm-400 text-[12px]">
            &copy; rikumo {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
