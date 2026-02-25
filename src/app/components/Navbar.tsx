import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import logoImg from "../../assets/amslogo.png";
import logoImg from "../../assets/amslogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#purpose" },
  { label: "Platform", href: "#core" },
  { label: "Stakeholders", href: "#audience" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Support", href: "#support" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "rgba(14, 42, 71, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img src={logoImg} alt="AMS Logo" className="h-9 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white/65 hover:text-[#2F80ED] transition-colors duration-200 tracking-wide relative group"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-[#2F80ED] transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              className="text-white/65 hover:text-white transition-colors duration-200"
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              Sign In
            </button>
            <button
              className="text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "11px 28px",
                background: "linear-gradient(135deg, #2F80ED 0%, #1E5FA8 100%)",
                boxShadow: "0 4px 16px rgba(47, 128, 237, 0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(47, 128, 237, 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(47, 128, 237, 0.35)";
              }}
            >
              Get Access
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white/70 hover:text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: mobileOpen ? "400px" : "0px" }}
      >
        <div
          className="border-t border-white/10"
          style={{ background: "rgba(14, 42, 71, 0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-[1200px] mx-auto px-8 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-white/60 hover:text-white transition-colors py-3 border-b border-white/5"
                style={{ fontSize: "17px", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex gap-3">
              <button
                className="flex-1 border border-white/20 text-white rounded-lg py-3 transition-colors hover:border-white/40"
                style={{ fontSize: "17px", fontWeight: 500 }}
              >
                Sign In
              </button>
              <button
                className="flex-1 text-white rounded-lg py-3 transition-all"
                style={{
                  fontSize: "17px",
                  fontWeight: 500,
                  background: "linear-gradient(135deg, #2F80ED, #1E5FA8)",
                }}
              >
                Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}