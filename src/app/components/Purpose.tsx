import { useState } from "react";
import { useInView } from "../hooks/useInView";

const pillars = [
  { title: "Unified Data", desc: "All athlete data in one governed platform" },
  { title: "Scientific Approach", desc: "Evidence-based planning and evaluation" },
  { title: "Indian Context", desc: "Built for Indian sports workflows" },
  { title: "Multi-Role Access", desc: "Role-based access for every stakeholder" },
];

export function Purpose() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="purpose"
      className="w-full bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "110px 0" }}
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Copy — 7 cols */}
          <div
            className="lg:col-span-7 transition-all duration-700"
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
                style={{ fontSize: "13px", fontWeight: 600, color: "#2F80ED" }}
              >
                Why AMS
              </span>
            </div>

            {/* H2 */}
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
              Purpose
            </h2>

            {/* Body Large */}
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B", marginBottom: "24px" }}>
              Designed to enable consistent monitoring, planning, and evaluation of athlete development through a
              unified, purpose-built platform for Indian sports workflows.
            </p>

            <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B" }}>
              Built to support athletes, coaches, and sports science professionals — bringing training, wellness,
              nutrition, and performance data into a unified, governed system that ensures data continuity and
              institutional alignment.
            </p>

            {/* Key pillars */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, i) => (
                <PillarItem key={item.title} item={item} delay={i * 80} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right: Visual — 5 cols */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "150ms",
            }}
          >
            <PurposeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarItem({ item, delay, inView }: { item: typeof pillars[0]; delay: number; inView: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="flex items-start gap-4 rounded-2xl border p-5 cursor-default transition-all duration-250"
      style={{
        borderColor: hov ? "rgba(47,128,237,0.25)" : "#F3F5F8",
        background: hov ? "rgba(47,128,237,0.04)" : "white",
        boxShadow: hov ? "0 6px 24px rgba(47,128,237,0.08)" : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay + 300}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-250"
        style={{ background: hov ? "#2F80ED" : "#EEF4FF", border: hov ? "none" : "1px solid #c7d2fe" }}
      >
        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
          <path
            d="M2 6l2.5 2.5L10 3.5"
            stroke={hov ? "white" : "#2F80ED"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3, color: "#1A1A1A" }}>{item.title}</div>
        <div className="mt-0.5" style={{ fontSize: "15px", lineHeight: 1.5, color: "#5F6C7B" }}>
          {item.desc}
        </div>
      </div>
    </div>
  );
}

function PurposeVisual() {
  return (
    <div className="relative w-full max-w-[400px]">
      {/* Main card */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
        style={{ background: "linear-gradient(145deg, #0E2A47 0%, #1A3F6B 100%)" }}
      >
        {/* Card header */}
        <div className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-white/30 tracking-widest uppercase" style={{ fontSize: "11px" }}>
            AMS Dashboard
          </span>
          <div className="w-12" />
        </div>

        {/* Card body */}
        <div className="p-8">
          {/* Athlete profile */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white/20"
              style={{ background: "linear-gradient(135deg, #2F80ED, #1E5FA8)" }}
            >
              <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <circle cx="14" cy="7" r="4.5" fill="rgba(255,255,255,0.9)" />
                <path d="M6 26 Q6 17 14 17 Q22 17 22 26" fill="rgba(255,255,255,0.9)" />
              </svg>
            </div>
            <div>
              <div className="text-white" style={{ fontSize: "17px", fontWeight: 600 }}>
                Arjun S.
              </div>
              <div className="text-white/50" style={{ fontSize: "14px" }}>
                Athletics · Sprint
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-green-400" style={{ fontSize: "12px", fontWeight: 500 }}>
                  Active Training
                </span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-8">
            {[
              { label: "Training Load", value: 87, color: "#2F80ED" },
              { label: "Wellness Score", value: 92, color: "#0b7a3e" },
              { label: "Recovery Index", value: 74, color: "#facc15" },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-white/60" style={{ fontSize: "14px" }}>
                    {m.label}
                  </span>
                  <span className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {m.value}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${m.value}%`, background: m.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["Phase 2 Training", "Nutrition Plan Active", "Medical Clearance"].map((tag) => (
              <span
                key={tag}
                className="border text-white/60 rounded-full"
                style={{
                  fontSize: "12px",
                  padding: "4px 12px",
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-4 -right-4 rounded-xl shadow-xl flex items-center gap-2"
        style={{
          padding: "10px 16px",
          background: "linear-gradient(135deg, #2F80ED, #1E5FA8)",
          boxShadow: "0 8px 24px rgba(47,128,237,0.4)",
        }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
          <path d="M8 2l1.8 4 4.2.5-3 3 .7 4.2L8 11.5 4.3 13.7l.7-4.2-3-3 4.2-.5z" fill="white" />
        </svg>
        <span style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>AMS Verified</span>
      </div>
    </div>
  );
}