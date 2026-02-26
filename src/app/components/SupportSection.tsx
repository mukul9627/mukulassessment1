import { useState } from "react";
import { BookOpen, HelpCircle, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const supportOptions = [
  {
    id: 1,
    icon: <BookOpen className="w-6 h-6" />,
    color: "#2F80ED",
    bg: "#EEF4FF",
    title: "Documentation",
    description:
      "Access comprehensive user guides, platform manuals, and onboarding documentation for all stakeholder roles.",
  },
  {
    id: 2,
    icon: <HelpCircle className="w-6 h-6" />,
    color: "#0b7a3e",
    bg: "#ecfdf5",
    title: "Help Center",
    description:
      "Browse the AMS Help section for FAQs, troubleshooting steps, or connect with the official helpdesk directly.",
  },
  {
    id: 3,
    icon: <MessageSquare className="w-6 h-6" />,
    color: "#7c3aed",
    bg: "#faf5ff",
    title: "Resolution Pathways",
    description:
      "Clear resolution pathways ensure minimal disruption to athlete engagement and institutional workflows.",
  },
];

export function SupportSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="support"
      className="w-full bg-white"
      style={{ fontFamily: "'Poppins-Regular', sans-serif", padding: "110px 0" }}
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Content — 7 cols */}
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
              <span className="uppercase tracking-[0.2em]" style={{ fontSize: "13px", fontWeight: 600, color: "#2F80ED" }}>
                We're Here to Help
              </span>
            </div>

            {/* H2 */}
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
              Support &amp;
              <br />
              Assistance
            </h2>

            {/* Body */}
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B", marginBottom: "48px" }}>
              The AMS platform provides comprehensive support channels to ensure all users can access guidance, resolve
              issues, and get the most from their experience.
            </p>

            {/* Support options — staggered fade-in */}
            <div className="space-y-5 mb-12">
              {supportOptions.map((item, i) => (
                <SupportCard key={item.id} item={item} delay={i * 100} inView={inView} />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "17px 44px",
                  background: "linear-gradient(135deg, #2F80ED, #1E5FA8)",
                  boxShadow: "0 4px 16px rgba(47,128,237,0.3)",
                }}
              >
                Contact Support
              </button>
              <button
                className="border border-[#1A1A1A]/15 hover:border-[#2F80ED]/40 hover:text-[#2F80ED] rounded-xl transition-all duration-200"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "17px 44px",
                  color: "#1A1A1A",
                }}
              >
                View Documentation
              </button>
            </div>
          </div>

          {/* Right: Contact card — 4 cols */}
          <div
            className="lg:col-span-4 lg:col-start-9 lg:pt-[88px] transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: "#E0E9FF" }}>
              {/* Card header */}
              <div
                className="px-8 py-6"
                style={{ background: "linear-gradient(135deg, #0E2A47 0%, #1E5FA8 100%)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                      <circle cx="18" cy="18" r="17" fill="rgba(255,255,255,0.15)" />
                      <path
                        d="M18 7 L20.5 14.5 L28.5 14.5 L22 19 L24.5 27 L18 22.5 L11.5 27 L14 19 L7.5 14.5 L15.5 14.5 Z"
                        fill="#facc15"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-white tracking-[0.2em]"
                    style={{ fontFamily: "OrganettoBold", fontSize: "18px", fontWeight: 700 }}
                  >
                    AMS
                  </span>
                </div>
                <p className="text-white/50" style={{ fontSize: "15px" }}>
                  Official Contact Details
                </p>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px", background: "#F8FAFF" }}>
                <div className="space-y-5">
                  <ContactItem icon={<Mail className="w-4 h-4 text-[#2F80ED]" />} label="Email">
                    <a
                      href="mailto:support@amssystem.in"
                      className="transition-colors hover:text-[#1E5FA8]"
                      style={{ fontSize: "15px", fontWeight: 500, color: "#2F80ED" }}
                    >
                      support@amssystem.in
                    </a>
                  </ContactItem>

                  <ContactItem icon={<Phone className="w-4 h-4 text-[#2F80ED]" />} label="Phone">
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A" }}>+91 98XXX XXXXX</div>
                    <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A" }}>+91 11-XXXX-XXXX</div>
                  </ContactItem>

                  <div className="pt-5 border-t" style={{ borderColor: "#E0E9FF" }}>
                    <ContactItem icon={<MapPin className="w-4 h-4 text-[#2F80ED]" />} label="Office">
                      <p style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.6 }}>
                        Sports Authority of India,
                        <br />
                        Jawaharlal Nehru Stadium,
                        <br />
                        New Delhi – 110003
                      </p>
                    </ContactItem>
                  </div>
                </div>
              </div>

              {/* Accent bar */}
              <div className="h-1" style={{ background: "linear-gradient(90deg, #2F80ED, #facc15, #2F80ED)" }} />
            </div>

            {/* Hours */}
            <div
              className="mt-4 rounded-xl border text-center"
              style={{ padding: "16px", borderColor: "#E0E9FF", background: "#F8FAFF" }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A" }}>Mon – Sat, 9AM – 6PM IST</span>
              </div>
              <p style={{ fontSize: "13px", color: "#5F6C7B" }}>Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportCard({
  item,
  delay,
  inView,
}: {
  item: (typeof supportOptions)[0];
  delay: number;
  inView: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="flex items-start gap-6 rounded-2xl bg-white cursor-pointer transition-all duration-200"
      style={{
        padding: "24px",
        border: hov ? `1.5px solid ${item.color}25` : "1.5px solid #EEF2F8",
        boxShadow: hov ? `0 6px 24px rgba(0,0,0,0.07)` : "0 2px 12px rgba(0,0,0,0.04)",
        borderLeft: hov ? `3px solid ${item.color}` : "1.5px solid #EEF2F8",
        background: hov ? `${item.color}04` : "white",
        transform: inView ? "translateY(0)" : "translateY(20px)",
        opacity: inView ? 1 : 0,
        transition: `border 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, opacity 0.6s ease ${delay + 300}ms, transform 0.6s ease ${delay + 300}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200"
        style={{
          background: hov ? item.color : item.bg,
          color: hov ? "white" : item.color,
          transform: hov ? "scale(1.05)" : "scale(1)",
        }}
      >
        {item.icon}
      </div>

      <div className="flex-1">
        <h4 className="mb-2" style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.3, color: "#1A1A1A" }}>
          {item.title}
        </h4>
        <p style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.7, color: "#5F6C7B" }}>{item.description}</p>
      </div>

      {/* Arrow */}
      {/* <div
        className="flex-shrink-0 self-center w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
        style={{
          background: hov ? `${item.color}15` : "#F3F5F8",
          color: item.color,
          transform: hov ? "translateX(3px)" : "translateX(0)",
        }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div> */}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
        style={{ background: "#EEF4FF", border: "1px solid #C7D8FF" }}
      >
        {icon}
      </div>
      <div>
        <p
          className="uppercase tracking-wider mb-1"
          style={{ fontSize: "12px", fontWeight: 500, color: "#5F6C7B" }}
        >
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}