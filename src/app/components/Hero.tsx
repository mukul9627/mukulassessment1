import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0E2A47 0%, #0E2A47 30%, #1E5FA8 80%, #0E2A47 100%)",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Animated gradient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "960px",
          height: "640px",
          background:
            "radial-gradient(ellipse at center, rgba(47,128,237,0.16) 0%, rgba(30,95,168,0.08) 50%, transparent 75%)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />

      {/* Secondary glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "60%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(47,128,237,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating sport lines SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.08 }}>
        <svg className="absolute" style={{ width: "100%", height: "100%" }} viewBox="0 0 1440 900" fill="none">
          {/* Athletic motion lines */}
          <path
            d="M-50 600 Q200 400 450 500 Q700 600 950 350 Q1150 200 1490 300"
            stroke="#2F80ED"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 700 Q300 500 550 600 Q750 700 1000 450 Q1200 300 1490 420"
            stroke="#2F80ED"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 900 Q400 700 600 750 Q800 800 1100 600 Q1300 480 1490 550"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Track oval */}
          <ellipse cx="1100" cy="200" rx="180" ry="80" stroke="#2F80ED" strokeWidth="0.8" fill="none" />
          <ellipse cx="1100" cy="200" rx="130" ry="55" stroke="#2F80ED" strokeWidth="0.5" fill="none" />
          {/* Trajectory arc */}
          <path d="M300 50 Q500 -40 700 80 Q900 200 1000 150" stroke="white" strokeWidth="0.7" fill="none" strokeDasharray="6 4" />
        </svg>
      </div>

      {/* Star particles */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: s.sz, height: s.sz, top: s.top, left: s.left, opacity: s.op }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative max-w-[1200px] mx-auto px-8 flex flex-col items-center justify-center text-center"
        style={{ paddingTop: "180px", paddingBottom: "120px" }}
      >
        {/* Badge */}
        <div style={fadeUp(0)}>
          <div
            className="inline-flex items-center gap-2.5 border border-white/12 rounded-full bg-white/5 mb-8"
            style={{ padding: "9px 24px", backdropFilter: "blur(8px)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" style={{ boxShadow: "0 0 6px #2F80ED" }} />
            <span className="text-white/60 tracking-[0.18em] uppercase" style={{ fontSize: "14px", fontWeight: 500 }}>
              India's National Sports Development Platform
            </span>
          </div>
        </div>

        {/* H1 */}
        <div style={fadeUp(100)}>
          <h1
            className="text-white uppercase mb-6 max-w-4xl"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "clamp(52px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "0.01em",
            }}
          >
            Athlete Management
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2F80ED, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              System
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div style={fadeUp(200)}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-white/12" />
            <div className="w-2 h-2 rounded-full bg-[#2F80ED]" style={{ boxShadow: "0 0 8px #2F80ED" }} />
            <div className="w-16 h-px bg-white/12" />
          </div>
        </div>

        {/* Subtitle */}
        <div style={fadeUp(300)}>
          <p
            className="max-w-2xl mb-4"
            style={{ fontSize: "22px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}
          >
            A centralized digital platform for structured, scientific athlete development across the Indian
            sports ecosystem — built for athletes, coaches, sports science professionals, and training centers.
          </p>
          <p
            className="max-w-xl mb-12"
            style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.4)" }}
          >
            Unify training, wellness, nutrition, and performance data under a single governed system.
          </p>
        </div>

        {/* CTAs */}
        {/* <div style={fadeUp(400)}>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => scrollTo("#audience")}
              className="text-white rounded-xl transition-all duration-200"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "18px 48px",
                background: "linear-gradient(135deg, #2F80ED 0%, #1E5FA8 100%)",
                boxShadow: "0 6px 24px rgba(47,128,237,0.4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "scale(1.03)";
                el.style.boxShadow = "0 10px 32px rgba(47,128,237,0.55)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "0 6px 24px rgba(47,128,237,0.4)";
              }}
            >
              Explore Platform
            </button>
            <button
              onClick={() => scrollTo("#purpose")}
              className="border border-white/20 hover:border-white/40 text-white rounded-xl transition-all duration-200"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                padding: "18px 48px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              Learn More →
            </button>
          </div>
        </div> */}

        {/* Stats */}
        <div style={fadeUp(500)}>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {[
              { value: "6+", label: "Core Modules" },
              { value: "4", label: "Stakeholder Roles" },
              { value: "100%", label: "Data Governed" },
              { value: "28+", label: "Sports Disciplines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "42px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#2F80ED",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/40 tracking-widest uppercase mt-1"
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent, rgba(14, 42, 71, 0.6))",
        }}
      />

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }
      `}</style>
    </section>
  );
}

const STARS = [
  { top: "8%", left: "6%", sz: "2px", op: 0.4 },
  { top: "14%", left: "22%", sz: "1.5px", op: 0.3 },
  { top: "6%", left: "60%", sz: "2px", op: 0.5 },
  { top: "18%", left: "78%", sz: "1px", op: 0.3 },
  { top: "28%", left: "91%", sz: "2px", op: 0.4 },
  { top: "38%", left: "4%", sz: "1.5px", op: 0.35 },
  { top: "45%", left: "14%", sz: "1px", op: 0.2 },
  { top: "52%", left: "88%", sz: "1.5px", op: 0.3 },
  { top: "62%", left: "70%", sz: "2px", op: 0.35 },
  { top: "70%", left: "30%", sz: "1px", op: 0.25 },
  { top: "78%", left: "50%", sz: "1.5px", op: 0.3 },
  { top: "85%", left: "8%", sz: "2px", op: 0.4 },
  { top: "88%", left: "92%", sz: "1px", op: 0.2 },
  { top: "3%", left: "40%", sz: "1.5px", op: 0.3 },
  { top: "22%", left: "55%", sz: "1px", op: 0.25 },
  { top: "48%", left: "44%", sz: "1.5px", op: 0.2 },
  { top: "72%", left: "82%", sz: "2px", op: 0.35 },
  { top: "12%", left: "85%", sz: "1.5px", op: 0.28 },
];