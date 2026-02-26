import { useState } from "react";
import logoImg from "../../assets/amslogo.png";
import { Phone, MapPin } from "lucide-react";

const footerColumns = [
  {
    heading: "Platform",
    links: [
      { label: "About AMS", href: "#purpose" },
      { label: "Platform Overview", href: "#core" },
      { label: "Stakeholders", href: "#audience" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Governance", href: "#governance" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#support" },
      { label: "Help Center", href: "#support" },
      { label: "User Guides", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Release Notes", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="w-full" style={{ fontFamily: "'Inter', sans-serif", background: "#0E2A47" }}>
      {/* Top gradient accent */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(47,128,237,0.5), rgba(250,204,21,0.4), rgba(47,128,237,0.5), transparent)",
        }}
      />

      <div
        className="max-w-[1200px] mx-auto px-8"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        {/* Main grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Brand col — 4 cols */}
          <div className="md:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="AMS Logo" className="h-10 w-auto object-contain" />
            </div>

            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              India's centralized digital platform for structured, scientific athlete development across the national
              sports ecosystem.
            </p>

            {/* App badges */}
            <div className="flex flex-col gap-3 mb-8">
              <AppBadge store="apple" />
              <AppBadge store="google" />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "Twitter/X", path: "M4 4l16 16M20 4L4 20" },
                { label: "LinkedIn", path: "M4 6h16M4 12h8M4 18h6" },
                { label: "YouTube", path: "M10 8l8 4-8 4V8z" },
              ].map((s) => (
                <button
                  key={s.label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-[#2F80ED] hover:border-[#2F80ED] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  title={s.label}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d={s.path} stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Nav columns — 2 cols each */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <h4
                className="text-white uppercase tracking-[0.18em] pb-3 mb-5 border-b border-white/10"
                style={{ fontSize: "13px", fontWeight: 600 }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <FooterLink key={link.label} link={link} onScroll={handleScroll} />
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col — 2 cols */}
          <div className="md:col-span-2">
            <h4
              className="text-white uppercase tracking-[0.18em] pb-3 mb-5 border-b border-white/10"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              Contact
            </h4>
            <div className="space-y-4 mb-8">
              {[
                { icon: "✉", text: "support@amssystem.in" },
                { icon: <Phone className="text-white" size={18} />, text: "+91 98XXX XXXXX"},
                { icon: <MapPin className="text-white" size={18} />, text: "SAI, JLN Stadium, New Delhi"},
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-2.5">
                  <span style={{ fontSize: "18px", color: 'white' }}>{c.icon}</span>
                  <span style={{ fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.4)" }}>{c.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="mb-3" style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
                Stay updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg text-white outline-none transition-colors"
                  style={{
                    fontSize: "13px",
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "#2F80ED";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
                <button
                  className="rounded-lg flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "10px 14px",
                    background: "linear-gradient(135deg, #2F80ED, #1E5FA8)",
                  }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.25)", textTransform:"uppercase" }}>
           COPYRIGHT © 2026 Athlete Management System . All Rights Reserved.
          </p>
          {/* <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.25)" }}>All systems operational</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  link,
  onScroll,
}: {
  link: { label: string; href: string };
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const [hov, setHov] = useState(false);
  return (
    <li>
      <a
        href={link.href}
        onClick={(e) => onScroll(e, link.href)}
        className="flex items-center gap-2 transition-all duration-200 relative group"
        style={{ fontSize: "15px", fontWeight: 400, color: hov ? "#2F80ED" : "rgba(255,255,255,0.4)" }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <span
          className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200"
          style={{ background: hov ? "#2F80ED" : "rgba(255,255,255,0.15)" }}
        />
        <span className="relative">
          {link.label}
          <span
            className="absolute -bottom-px left-0 h-px bg-[#2F80ED] transition-all duration-300"
            style={{ width: hov ? "100%" : "0%" }}
          />
        </span>
      </a>
    </li>
  );
}

function AppBadge({ store }: { store: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 border rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
      style={{
        padding: "10px 16px",
        maxWidth: "180px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
      }}
    >
      {store === "apple" ? (
        <svg viewBox="0 0 22 26" fill="rgba(255,255,255,0.7)" className="w-5 h-5 flex-shrink-0">
          <path d="M18.07 13.77c-.02-2.83 2.32-4.2 2.43-4.27-1.33-1.94-3.39-2.2-4.12-2.23-1.75-.18-3.43 1.04-4.32 1.04-.9 0-2.28-1.02-3.76-.99-1.92.03-3.7 1.12-4.69 2.83-2 3.47-.52 8.6 1.44 11.41.96 1.38 2.1 2.93 3.6 2.87 1.45-.06 2-.94 3.75-.94 1.75 0 2.24.94 3.77.91 1.55-.03 2.54-1.4 3.49-2.79 1.1-1.59 1.55-3.14 1.57-3.22-.04-.01-3-.15-3.16-2.62zM15.17 5.27c.8-.97 1.34-2.31 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.85-1.39 2.22-1.22 3.53 1.29.1 2.6-.65 3.41-1.61z" />
        </svg>
      ) : (
        <svg viewBox="0 0 22 24" fill="rgba(255,255,255,0.7)" className="w-5 h-5 flex-shrink-0">
          <path d="M1.5.6l12.5 12L1.5 24.4c-.3-.2-.5-.5-.5-.9V1.5C1 1.1 1.2.8 1.5.6zm15 8.7l2.7 1.6c.8.4.8 1 0 1.5l-2.7 1.6-3-2.8 3-2.9zm-13.7-8l11.7 11-1.7 1.5L1.8 2.3l1-.9zm0 22.5l10-10.2 1.7 1.6L2.8 25.5l-1-1z" />
        </svg>
      )}
      <div>
        <p className="text-white/35" style={{ fontSize: "10px", lineHeight: 1 }}>
          {store === "apple" ? "Download on the" : "Get it on"}
        </p>
        <p className="text-white" style={{ fontSize: "13px", fontWeight: 600, lineHeight: 1.3 }}>
          {store === "apple" ? "App Store" : "Google Play"}
        </p>
      </div>
    </a>
  );
}