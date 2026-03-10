export default function StickyBar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col">
      {[
        { label: "Gift Card", href: "https://rikumo.com/products/gift-card" },
        { label: "Contact Us", href: "mailto:info@rikumo.com" },
        { label: "Events", href: "https://rikumo.com/pages/events" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="bg-warm-700 text-white text-[11px] tracking-[0.1em] py-3 px-2 no-underline hover:bg-warm-900 transition-colors"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
