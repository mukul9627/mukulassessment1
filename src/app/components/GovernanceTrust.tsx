import { useState } from "react";
import { useInView } from "../hooks/useInView";

const trustPillars = [
  {
    id: 1,
    title: "Role-Based Access Control",
    description:
      "Each stakeholder category — athlete, coach, SSP, admin — operates within a clearly defined role boundary, ensuring data integrity and appropriate access.",
    color: "#2F80ED",
    bg: "#EEF4FF",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path d="M14 4 L14 14 M14 14 L8 20 M14 14 L20 20" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="3.5" r="3" fill="#2F80ED" />
        <circle cx="8" cy="22" r="3" fill="#2F80ED" />
        <circle cx="20" cy="22" r="3" fill="#2F80ED" />
      </svg>
    ),
    iconHov: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path d="M14 4 L14 14 M14 14 L8 20 M14 14 L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="3.5" r="3" fill="white" />
        <circle cx="8" cy="22" r="3" fill="white" />
        <circle cx="20" cy="22" r="3" fill="white" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Secure Data Handling",
    description:
      "Athlete data is handled under strict data protocols, ensuring only authorized access and anonymized scientific reporting across all modules.",
    color: "#0b7a3e",
    bg: "#ecfdf5",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path
          d="M14 2L23 6.5v8.5c0 5.5-9 10.5-9 10.5S5 20.5 5 15V6.5L14 2z"
          fill="#0b7a3e"
          opacity="0.1"
          stroke="#0b7a3e"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9.5 14l3 3 6.5-7" stroke="#0b7a3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconHov: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <path
          d="M14 2L23 6.5v8.5c0 5.5-9 10.5-9 10.5S5 20.5 5 15V6.5L14 2z"
          fill="rgba(255,255,255,0.2)"
          stroke="white"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9.5 14l3 3 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Institutional Policy Alignment",
    description:
      "Designed in alignment with applicable Indian institutional and national sports data governance policies for full regulatory compliance.",
    color: "#7c3aed",
    bg: "#faf5ff",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <rect x="5.5" y="5.5" width="17" height="20" rx="2" fill="none" stroke="#7c3aed" strokeWidth="1.8" />
        <path d="M9 11h10M9 15h10M9 19h6" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 3.5h6v4H11z" fill="#7c3aed" />
      </svg>
    ),
    iconHov: (
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
        <rect x="5.5" y="5.5" width="17" height="20" rx="2" fill="none" stroke="white" strokeWidth="1.8" />
        <path d="M9 11h10M9 15h10M9 19h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 3.5h6v4H11z" fill="white" />
      </svg>
    ),
  },
];

export function GovernanceTrust() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="governance"
      className="w-full"
      style={{
        background: "#F3F5F8",
        fontFamily: "'Inter', sans-serif",
        padding: "110px 0",
      }}
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: visual — 5 cols */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "150ms",
            }}
          >
            <GovernanceVisual />
          </div>

          {/* Right: content — 6 cols offset */}
          <div
            className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2F80ED]" />
              <span className="uppercase tracking-[0.2em]" style={{ fontSize: "13px", fontWeight: 600, color: "#2F80ED" }}>
                Data Governance
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
              Governance
              <br />
              &amp; Trust
            </h2>

            {/* Body */}
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B", marginBottom: "48px" }}>
              AMS Core operates under strict governance principles that ensure accountability, transparency, and proper
              data stewardship throughout the platform lifecycle.
            </p>

            {/* Pillars */}
            <div className="space-y-5">
              {trustPillars.map((item, i) => (
                <TrustCard key={item.id} item={item} delay={i * 80} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  item,
  delay,
  inView,
}: {
  item: (typeof trustPillars)[0];
  delay: number;
  inView: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="flex items-start gap-6 rounded-2xl border bg-white cursor-default transition-all duration-200"
      style={{
        padding: "24px",
        borderColor: hov ? `${item.color}25` : "transparent",
        boxShadow: hov ? `0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1.5px ${item.color}20` : "0 2px 16px rgba(0,0,0,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? (hov ? "translateY(-2px)" : "translateY(0)") : "translateY(16px)",
        transitionDelay: inView ? `${delay + 200}ms` : "0ms",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          background: hov ? item.color : item.bg,
          transform: hov ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        {hov ? item.iconHov : item.icon}
      </div>
      <div style={{ transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "transform 0.2s ease" }}>
        <h4
          className="mb-2"
          style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3, color: "#1A1A1A" }}
        >
          {item.title}
        </h4>
        <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

function GovernanceVisual() {
  return (
    <div className="relative w-full max-w-[380px]">
      <div
        className="rounded-2xl overflow-hidden shadow-xl border"
        style={{ background: "white", borderColor: "#E0E9FF" }}
      >
        {/* Header */}
        <div
          className="px-8 py-5 border-b"
          style={{
            background: "linear-gradient(135deg, #0E2A47, #1E5FA8)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                <path d="M10 1L17 4.5v7c0 4.2-7 7.5-7 7.5S3 15.7 3 11.5v-7L10 1z" opacity="0.9" />
              </svg>
            </div>
            <div>
              <div className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                AMS Governance Layer
              </div>
              <div className="text-white/50" style={{ fontSize: "12px" }}>
                Institutional Data Framework
              </div>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/60" style={{ fontSize: "11px" }}>
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px" }}>
          {/* Role grid */}
          <div
            className="mb-4 uppercase tracking-wider"
            style={{ fontSize: "13px", fontWeight: 600, color: "#5F6C7B", letterSpacing: "0.12em" }}
          >
            Access Roles
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { role: "Athlete", level: "Personal Data", color: "#2F80ED" },
              { role: "Coach", level: "Team Data", color: "#0b7a3e" },
              { role: "Sports Scientist", level: "Scientific Reports", color: "#7c3aed" },
              { role: "Administrator", level: "Full Access", color: "#b45309" },
            ].map((r) => (
              <div
                key={r.role}
                className="rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px", borderColor: `${r.color}20`, background: `${r.color}07` }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.color }} />
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>{r.role}</span>
                </div>
                <span style={{ fontSize: "13px", color: "#5F6C7B" }}>{r.level}</span>
              </div>
            ))}
          </div>

          {/* Audit log */}
          <div
            className="rounded-xl border"
            style={{ padding: "16px", background: "#F8FAFF", borderColor: "#E0E9FF" }}
          >
            <div
              className="uppercase tracking-wider mb-3"
              style={{ fontSize: "12px", fontWeight: 600, color: "#5F6C7B", letterSpacing: "0.12em" }}
            >
              Audit Trail
            </div>
            {[
              { action: "Data Access", user: "Coach Ravi", time: "2m ago", dot: "#0b7a3e" },
              { action: "Report Generated", user: "Dr. Priya SSP", time: "1h ago", dot: "#7c3aed" },
              { action: "Session Updated", user: "Athlete Arjun", time: "3h ago", dot: "#2F80ED" },
            ].map((log) => (
              <div key={log.action} className="flex items-center gap-3 py-2 border-b last:border-0" style={{ borderColor: "#EEF2FF" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: log.dot }} />
                <div className="flex-1">
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#374151" }}>{log.action}</span>
                  <span className="ml-1.5" style={{ fontSize: "12px", color: "#5F6C7B" }}>
                    by {log.user}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#9ca3af" }}>{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badge */}
      <div
        className="absolute -bottom-4 -right-4 rounded-xl shadow-xl flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
        style={{
          padding: "12px 16px",
          background: "linear-gradient(135deg, #0E2A47, #1E5FA8)",
          boxShadow: "0 8px 24px rgba(14,42,71,0.35)",
        }}
      >
        <svg viewBox="0 0 20 20" fill="#facc15" className="w-4 h-4">
          <path d="M10 1L17 4.5v7c0 4.2-7 7.5-7 7.5S3 15.7 3 11.5v-7L10 1z" />
        </svg>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>Governance Certified</span>
      </div>
    </div>
  );
}