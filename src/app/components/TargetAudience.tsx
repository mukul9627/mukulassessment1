import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import Aicon from "../../assets/Group 55164.svg";
import Cicon from "../../assets/Group 55168.svg";
import Sicon from "../../assets/Group 55169.svg";
import Ticon from "../../assets/Group 55170.svg";

const audiences = [
  {
    id: 1,
    tag: "Athletes",
    // title: "Train with\nData Precision",
    description:
      "Track training, wellness, nutrition, and recovery within a structured digital environment.",
    color: "#2F80ED",
    bg: "#EEF4FF",
    borderGlow: "rgba(47,128,237,0.3)",
    icon: <AthleteIcon />,
    features: ["Training logs", "Wellness tracking", "Nutrition plans"],
  },
  {
    id: 2,
    tag: "Coaches",
    // title: "Plan,\nMonitor & Evaluate",
    description:
      "Plan, monitor, and evaluate training programs with athlete-specific insights.",
    color: "#0b7a3e",
    bg: "#ecfdf5",
    borderGlow: "rgba(11,122,62,0.3)",
    icon: <CoachIcon />,
    features: ["Program planning", "Progress tracking", "Performance insights"],
  },
  {
    id: 3,
    tag: "Sports Science",
    // title: "Scientific\nAssessments",
    description:
      "Conduct discipline-specific assessments & generate scientific reports.",
    color: "#7c3aed",
    bg: "#faf5ff",
    borderGlow: "rgba(124,58,237,0.3)",
    icon: <ScienceIcon />,
    features: ["Scientific reports", "Anonymized data", "Sport-specific tests"],
  },
  {
    id: 4,
    tag: "Administrators",
    // title: "Govern &\nOversee",
    description:
      "Enable standardized workflows, centralized oversight, & institutional data consistency across programs.",
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
        fontFamily: "'Poppins-Regular', sans-serif",
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
              fontFamily: "OrganettoBold",
              fontSize: "clamp(30px, 4.5vw, 30px)",
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
    <img 
      src={Aicon} 
      alt="Athlete Icon"
      className="w-7 h-7"
    />
  );
}

function CoachIcon() {
  return (
     <img 
      src={Cicon} 
      alt="Athlete Icon"
      className="w-7 h-7"
    />
  );
}

function ScienceIcon() {
  return (
     <img 
      src={Sicon} 
      alt="Athlete Icon"
      className="w-7 h-7"
    />
  );
}

function AdminIcon() {
  return (
      <img 
      src={Ticon} 
      alt="Athlete Icon"
      className="w-7 h-7"
    />
  );
}