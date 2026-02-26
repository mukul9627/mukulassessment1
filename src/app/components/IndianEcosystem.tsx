import { useInView } from "../hooks/useInView";

const stats = [
  { val: "28+", label: "Sports Disciplines" },
  { val: "SAI", label: "Aligned Framework" },
  { val: "100%", label: "Data Sovereignty" },
];

export function IndianEcosystem() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="ecosystem"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0E2A47 0%, #0E2A47 40%, #1E5FA8 80%, #0E2A47 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: "110px 0",
      }}
      ref={ref}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(47,128,237,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Text — 6 cols */}
          <div
            className="lg:col-span-6 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2F80ED]" />
              <span
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: "15px", fontWeight: 600, color: "#2F80ED" }}
              >
                Platform Context
              </span>
            </div>

            {/* H2 */}
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "clamp(40px, 4.5vw, 60px)",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "0.04em",
              }}
            >
              Indian Sports
              <br />
              Ecosystem
            </h2>

            <div className="flex items-center gap-3 mt-5 mb-8">
              <div className="w-14 h-0.5 bg-[#2F80ED] rounded-full" />
              <div className="w-5 h-px bg-[#2F80ED]/30 rounded-full" />
            </div>

            {/* Body Large */}
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: "24px" }}>
              AMS Core is structured with full consideration for institutional workflows and governance requirements
              within the Indian sports development landscape.
            </p>

            {/* Body Normal */}
            <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: "48px" }}>
              It supports structured athlete tracking, role-based access, and governance-driven data handling to ensure
              consistency, integrity, and continuity across development programs and pathways nationwide.
            </p>

            {/* Stat grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {stats.map((s, i) => (
    <div
      key={s.label}
      className="rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{
        padding: "20px 16px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${i * 80 + 300}ms`,
        transform: inView ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <div
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: 1,
          color: "#fff",
        }}
      >
        {s.val}
      </div>

      <div
        className="text-white/45 mt-2 uppercase tracking-wider"
        style={{ fontSize: "13px", fontWeight: 500 }}
      >
        {s.label}
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Right: Globe — 5 cols offset */}
          <div
            className="lg:col-span-5 lg:col-start-8 flex justify-center lg:justify-end transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "150ms",
            }}
          >
            <EcosystemGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemGlobe() {
  return (
    <div className="relative w-[340px] h-[340px]">
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          background: "radial-gradient(ellipse, rgba(47,128,237,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Concentric rings */}
      {[340, 275, 210, 145].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: (340 - size) / 2,
            top: (340 - size) / 2,
            border: `1px solid rgba(47,128,237,${0.08 + i * 0.05})`,
          }}
        />
      ))}

      {/* Center hub */}
      <div
        className="absolute rounded-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          width: "177px",
          height: "177px",
          left: (310 - 145) / 2,
          top: (311.4 - 145) / 2,
          background: "linear-gradient(140deg, #1E5FA8 0%, #0E2A47 100%)",
          boxShadow: "0 0 80px rgba(47,128,237,0.45)",
          border: "2px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Ashoka Chakra */}
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
          <circle cx="40" cy="40" r="26" stroke="#facc15" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="40" cy="40" r="18" stroke="#facc15" strokeWidth="1" strokeOpacity="0.3" />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 360) / 24;
            const r = (a * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={40 + 9 * Math.cos(r)}
                y1={40 + 9 * Math.sin(r)}
                x2={40 + 17 * Math.cos(r)}
                y2={40 + 17 * Math.sin(r)}
                stroke="#facc15"
                strokeWidth="0.9"
                strokeOpacity="0.7"
              />
            );
          })}
          <circle cx="40" cy="40" r="4.5" fill="#facc15" opacity="0.85" />
        </svg>
        <span
          className="absolute bottom-3 text-white/60 tracking-[0.15em]"
          style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "10px", fontWeight: 600 }}
        >
          भारत
        </span>
      </div>

      {/* Orbiting nodes */}
      {[
        { angle: 0, color: "#2F80ED", label: "Athletes", size: 11 },
        { angle: 60, color: "#1E5FA8", label: "Coaches", size: 8 },
        { angle: 120, color: "#0b7a3e", label: "Science", size: 10 },
        { angle: 180, color: "#2F80ED", label: "Admin", size: 8 },
        { angle: 240, color: "#7c3aed", label: "Data", size: 11 },
        { angle: 300, color: "#0891b2", label: "Gov", size: 9 },
      ].map(({ angle, color, label, size }) => {
        const rad = (angle * Math.PI) / 180;
        const orbitR = 135;
        const x = 170 + orbitR * Math.cos(rad);
        const y = 170 + orbitR * Math.sin(rad);
        return (
          <div key={label} className="absolute" style={{ left: x - size / 2, top: y - size / 2 }}>
            <div
              className="rounded-full"
              style={{
                width: size,
                height: size,
                background: color,
                boxShadow: `0 0 14px ${color}90`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}