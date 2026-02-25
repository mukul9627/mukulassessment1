import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const audiences = [
  {
    id: 1,
    tag: "Athletes",
    title: "Train with\nData Precision",
    description:
      "Track training activities, nutrition, wellness, and performance within a structured, data-governed environment tailored for Indian high-performance sports.",
    color: "#2F80ED",
    bg: "#EEF4FF",
    borderGlow: "rgba(47,128,237,0.3)",
    icon: <AthleteIcon />,
    features: ["Training logs", "Wellness tracking", "Nutrition plans"],
  },
  {
    id: 2,
    tag: "Coaches",
    title: "Plan,\nMonitor & Evaluate",
    description:
      "Plan, monitor, and evaluate training programs with athlete-specific insights and systematic progress tracking across all training phases.",
    color: "#0b7a3e",
    bg: "#ecfdf5",
    borderGlow: "rgba(11,122,62,0.3)",
    icon: <CoachIcon />,
    features: ["Program planning", "Progress tracking", "Performance insights"],
  },
  {
    id: 3,
    tag: "Sports Science",
    title: "Scientific\nAssessments",
    description:
      "Conduct discipline-specific assessments and generate structured, anonymised scientific reports for informed decision-making.",
    color: "#7c3aed",
    bg: "#faf5ff",
    borderGlow: "rgba(124,58,237,0.3)",
    icon: <ScienceIcon />,
    features: ["Scientific reports", "Anonymized data", "Sport-specific tests"],
  },
  {
    id: 4,
    tag: "Administrators",
    title: "Govern &\nOversee",
    description:
      "Enable standardized workflows, operational oversight, and institutional data consistency across training programs and development pathways.",
    color: "#b45309",
    bg: "#fffbeb",
    borderGlow: "rgba(180,83,9,0.3)",
    icon: <AdminIcon />,
    features: ["Role management", "Data governance", "Institutional oversight"],
  },
];

export function TargetAudience() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="audience"
      className="w-full"
      style={{
        background: "#F3F5F8",
        fontFamily: "'Inter', sans-serif",
        padding: "110px 0",
      }}
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
              style={{ fontSize: "13px", fontWeight: 600, color: "#2F80ED" }}
            >
              Who It Serves
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
            Target Audience
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B" }}>
            Serving every stakeholder across the structured athlete development lifecycle
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, i) => {
            const isHov = hovered === item.id;
            return (
              <div
                key={item.id}
                className="relative rounded-2xl flex flex-col cursor-pointer overflow-hidden transition-all duration-300"
                style={{
                  background: isHov ? item.color : "white",
                  border: isHov ? `1.5px solid transparent` : `1.5px solid #E8EEF8`,
                  boxShadow: isHov
                    ? `0 20px 60px ${item.borderGlow}, 0 0 0 1.5px ${item.color}`
                    : "0 2px 20px rgba(0,0,0,0.06)",
                  transform: isHov ? "translateY(-6px)" : "translateY(0)",
                  padding: "32px",
                  opacity: inView ? 1 : 0,
                  transitionDelay: inView ? `${i * 80}ms` : "0ms",
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ background: isHov ? "rgba(255,255,255,0.18)" : item.bg }}
                >
                  <div style={{ filter: isHov ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s" }}>
                    {item.icon}
                  </div>
                </div>

                {/* Tag */}
                <span
                  className="uppercase tracking-[0.18em] mb-3 transition-colors duration-300"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: isHov ? "rgba(255,255,255,0.65)" : item.color,
                  }}
                >
                  {item.tag}
                </span>

                {/* H3 */}
                <h3
                  className="mb-4 transition-colors duration-300 whitespace-pre-line"
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: isHov ? "white" : "#1A1A1A",
                  }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p
                  className="flex-1 mb-6 transition-colors duration-300"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: isHov ? "rgba(255,255,255,0.75)" : "#5F6C7B",
                  }}
                >
                  {item.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 transition-colors duration-300"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: isHov ? "white" : item.color,
                  }}
                >
                  Explore →
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300"
                    style={{ transform: isHov ? "translateX(6px)" : "translateX(0)" }}
                  />
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    background: isHov ? "rgba(255,255,255,0.2)" : item.color,
                    opacity: isHov ? 1 : 0.35,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AthleteIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="16" cy="7" r="4.5" fill="#2F80ED" />
      <path d="M8 28 Q8 18 16 18 Q24 18 24 28" fill="#2F80ED" />
      <path d="M13 18 L10 26" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 18 L22 26" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CoachIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="12" cy="7" r="4" fill="#0b7a3e" />
      <path d="M5 24 Q5 16 12 16 Q19 16 19 24" fill="#0b7a3e" />
      <rect x="20" y="11" width="10" height="8" rx="2" fill="#0b7a3e" opacity="0.8" />
      <path d="M22 15h6M22 17.5h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 19 L24 24 L28 21.5Z" fill="#0b7a3e" />
    </svg>
  );
}

function ScienceIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="5" y="9" width="22" height="16" rx="2.5" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" strokeWidth="1.5" />
      <path
        d="M9 20 L12 15 L16 18 L20 12 L23 16"
        stroke="#7c3aed"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 6 L22 6" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 6 L12 9 M20 6 L20 9" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AdminIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="4" y="14" width="24" height="14" rx="2" fill="#b45309" opacity="0.12" stroke="#b45309" strokeWidth="1.5" />
      <path d="M10 14 L10 10 Q10 6 16 6 Q22 6 22 10 L22 14" stroke="#b45309" strokeWidth="1.5" />
      <rect x="13" y="20" width="6" height="8" rx="1" fill="#b45309" />
      <circle cx="16" cy="17" r="1.5" fill="#b45309" />
    </svg>
  );
}