import { useState } from "react";
import { useInView } from "../hooks/useInView";
import amsLogo from "../../assets/amslogo.png";
const features = [
  {
    id: 1,
    title: "Training & Load Monitoring",
    description: "Structured session planning, personal exertion tracking, and optimized workload schedules for each athlete.",
    color: "#2F80ED",
    bg: "#EEF4FF",
    angle: 210,
    icon: "🏋️",
  },
  {
    id: 2,
    title: "Wellness & Recovery",
    description: "Daily wellness inputs aligned with training status and recovery phases to prevent overtraining.",
    color: "#0b7a3e",
    bg: "#ecfdf5",
    angle: 150,
    icon: "💚",
  },
  {
    id: 3,
    title: "Nutrition Integration",
    description: "Meal planning and nutrition guidance mapped to specific training objectives and athlete profiles.",
    color: "#7c3aed",
    bg: "#faf5ff",
    angle: 90,
    icon: "🥗",
  },
  {
    id: 4,
    title: "Scientific Reporting",
    description: "Anonymized, sport-specific scientific assessments and reports by authorized Sports Science Professionals.",
    color: "#b45309",
    bg: "#fffbeb",
    angle: 30,
    icon: "📊",
  },
  {
    id: 5,
    title: "Data Continuity",
    description: "Longitudinal athlete records maintained across training phases, sessions, and institutional transitions.",
    color: "#0891b2",
    bg: "#ecfeff",
    angle: 330,
    icon: "🔗",
  },
];

export function CoreFeatures() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="core"
      className="w-full bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "110px 0" }}
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#2F80ED]" />
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "15px", fontWeight: 600, color: "#2F80ED" }}
            >
              Platform Pillars
            </span>
            <div className="w-8 h-px bg-[#2F80ED]" />
          </div>
          <h2
            className="uppercase tracking-[0.04em] mb-6"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "clamp(40px, 4.5vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#1A1A1A",
            }}
          >
            What AMS Core Enables
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B" }}>
            Five integrated pillars forming a complete athlete development ecosystem
          </p>
        </div>

        {/* Desktop: radial diagram */}
        <div className="hidden lg:flex justify-center items-center">
          <div
            className="relative transition-all duration-700"
            style={{
              width: 1100,
              height: 740,
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.94)",
              transitionDelay: "200ms",
            }}
          >
            {/* ── SVG layer: dashed connecting lines + endpoint dots by mukul sharma ── */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={1100}
              height={740}
              viewBox="0 0 1100 740"
              fill="none"
            >
              {[
                { fid: 1, x1: 437, y1: 259, x2: 275, y2: 160 },
                { fid: 2, x1: 663, y1: 259, x2: 825, y2: 160 },
                { fid: 3, x1: 437, y1: 340, x2: 235, y2: 450 },
                { fid: 4, x1: 663, y1: 340, x2: 865, y2: 450 },
                { fid: 5, x1: 550, y1: 420, x2: 550, y2: 555 },
              ].map((seg) => {
                const f = features.find((ft) => ft.id === seg.fid)!;
                const isHov = hovered === seg.fid;
                return (
                  <g
                    key={seg.fid}
                    style={{
                      opacity: inView ? 1 : 0,
                      transition: `opacity 0.6s ease ${seg.fid * 90}ms`,
                    }}
                  >
                    <line
                      x1={seg.x1} y1={seg.y1} x2={seg.x2} y2={seg.y2}
                      stroke={isHov ? f.color : "#B8C8E4"}
                      strokeWidth={isHov ? 2 : 1.5}
                      strokeDasharray="7 5"
                      style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
                    />
                    <circle
                      cx={seg.x1} cy={seg.y1} r={isHov ? 6 : 4.5}
                      fill={isHov ? f.color : "#1E5FA8"}
                      style={{ transition: "all 0.25s ease" }}
                    />
                    <circle
                      cx={seg.x2} cy={seg.y2} r={isHov ? 6 : 4.5}
                      fill={isHov ? f.color : "#1E5FA8"}
                      style={{ transition: "all 0.25s ease" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* ── BIG center circle with uploaded logo ── */}
            <div
              className="absolute flex items-center justify-center rounded-full"
              style={{
                width: 240,
                height: 240,
                left: 430,
                top: 180,
                background: "linear-gradient(160deg, #0A1F3A 0%, #0E2A47 45%, #1E5FA8 100%)",
                border: "6px solid white",
                boxShadow:
                  "0 0 0 2px #1E5FA8, 0 24px 80px rgba(14,42,71,0.55), 0 0 80px rgba(47,128,237,0.25)",
                zIndex: 10,
                overflow: "hidden",
              }}
            >
              <img
                src={amsLogo}
                alt="AMS Logo"
                style={{
                  width: "190px",
                  height: "190px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* ── Feature text blocks ── */}
            {[
              { id: 1, left: 48,  top: 55,  width: 220, align: "right"  as const },
              { id: 2, left: 834, top: 55,  width: 220, align: "left"   as const },
              { id: 3, left: 7,  top: 345, width: 220, align: "right"  as const },
              { id: 4, left: 872, top: 345, width: 220, align: "left"   as const },
              { id: 5, left: 430, top: 560, width: 240, align: "center" as const },
            ].map((pos, i) => {
              const f = features.find((ft) => ft.id === pos.id)!;
              const isHov = hovered === pos.id;
              return (
                <div
                  key={pos.id}
                  className="absolute cursor-pointer p-[0px] m-[0px]"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: pos.width,
                    textAlign: pos.align,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(18px)",
                    transition: `opacity 0.65s ease ${i * 90 + 200}ms, transform 0.65s ease ${i * 90 + 200}ms`,
                    zIndex: 5,
                  }}
                  onMouseEnter={() => setHovered(pos.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Large number */}
                  <div
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: "52px",
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: "10px",
                      color: isHov ? f.color : "#D1DCF0",
                      transition: "color 0.25s ease",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {String(pos.id).padStart(2, "0")}
                  </div>
                  {/* Title */}
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: isHov ? f.color : "#1A1A1A",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "12px",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {f.title}
                  </div>
                  {/* Description */}
                  <div
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "#5F6C7B",
                    }}
                  >
                    {f.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: list */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl border p-8 transition-all duration-250 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: "white",
                borderColor: "#E0E9FF",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="mb-2" style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 }}>
                {f.title}
              </div>
              <div style={{ fontSize: "16px", lineHeight: 1.7, color: "#5F6C7B" }}>{f.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
