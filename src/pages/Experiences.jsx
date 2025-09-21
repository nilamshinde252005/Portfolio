import React, { useState } from "react";
import "../styles/Experiences.css";

const EXPERIENCES = [
  {
    id: "exp1",
    title: "Operations & Logistics Intern",
    company: "Amazon",
    date: "May 2025 — Aug 2025",
    location: "Derby, UK",
    bullets: [
      "Designed and implemented data-driven process optimisation, boosting vendor returns throughput by 129% (31 → 71 TPH).",
      "Led Safety Week campaign for 900+ associates, reducing ergonomic-related injuries by 30%.",
      "Built a risk & issue tracking framework with KPIs, cadence reviews, and escalation logs to improve accountability.",
      "Collaborated across compliance, operations, and marketing to localise a Europe-wide campaign with measurable outcomes."
    ],
    tech: ["Process Optimisation", "Data Analysis", "Risk Management", "Stakeholder Engagement"]
  },
  {
    id: "exp2",
    title: "Deputy Managing Director & Head of Finance",
    company: "Westminster Business Consultants (Junior Enterprise Europe)",
    date: "Apr 2024 — May 2025",
    location: "London, UK",
    bullets: [
      "Partnered with international clients to design a sustainable revenue model projected at $1M.",
      "Directed financial operations, streamlining forecasting and reporting, cutting reporting time by 25%.",
      "Coordinated multidisciplinary teams to deliver strategy, pricing, and market-entry recommendations.",
      "Enhanced organisational efficiency through structured workflows and strategic leadership."
    ],
    tech: ["Financial Modelling", "Business Strategy", "Project Management", "Excel"]
  },
  {
    id: "exp3",
    title: "Union Office Team Leader",
    company: "University of Westminster Student Union",
    date: "Sep 2024 — May 2025",
    location: "London, UK",
    bullets: [
      "Resolved 100+ high-complexity student cases monthly with empathy and efficiency.",
      "Managed workflows for 40+ student societies, ensuring operational excellence.",
      "Built and optimised rotas, escalation processes, and cross-departmental workflows.",
      "Improved stakeholder satisfaction through service delivery enhancements."
    ],
    tech: ["Leadership", "Operations Management", "Conflict Resolution", "Process Improvement"]
  },
  {
    id: "exp4",
    title: "LinkedIn Community Coordinator",
    company: "Westminster Business School",
    date: "Sep 2024 — May 2025",
    location: "London, UK",
    bullets: [
      "Executed a data-led engagement strategy, achieving 68% growth in professional membership.",
      "Designed targeted marketing campaigns to boost visibility, lead generation, and engagement.",
      "Aligned campaigns with institutional KPIs to deliver measurable outcomes.",
      "Collaborated with leadership to strengthen brand presence across digital platforms."
    ],
    tech: ["Digital Marketing", "Data Analytics", "Community Engagement", "Campaign Design"]
  },
  {
    id: "exp5",
    title: "Insight Assistant",
    company: "University of Westminster Students’ Union",
    date: "Sep 2025 — Present",
    location: "London, UK",
    bullets: [
      "Analysed student data to create themed reports with actionable insights.",
      "Identified trends and shared conclusions to inform Union strategy and decision-making."
    ],
    tech: ["Data Analysis", "Reporting", "Insight Generation"]
  },
  {
    id: "exp6",
    title: "Student Caller",
    company: "University of Westminster",
    date: "Feb 2024 — Jun 2024",
    location: "London, UK",
    bullets: [
      "Engaged with prospective students through high-volume outreach to promote offerings and address inquiries.",
      "Built strong relationships to support enrolment and organisational targets.",
      "Provided teams with data insights to enhance student recruitment strategies.",
      "Collaborated with Communications to act on student feedback effectively."
    ],
    tech: ["Communication", "Relationship Building", "Data Insights", "Outreach"]
  },
  {
    id: "exp7",
    title: "Digital Content Creator (Internship)",
    company: "TurkSquire",
    date: "Mar 2022 — Jun 2022",
    location: "Mumbai, India (Remote)",
    bullets: [
      "Developed engaging multimedia content for Facebook, Instagram, and Pinterest.",
      "Increased Instagram reach to 10K+ through targeted content strategies.",
      "Enhanced user engagement by tailoring content to platform-specific audiences."
    ],
    tech: ["Content Creation", "Social Media Strategy", "Digital Marketing", "Engagement Growth"]
  }
];

export default function Experiences() {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId);

  return (
    <section id="experiences" className="experiences-section">
      <div className="experiences-header">
        <p className="h1">
          <strong style={{ paddingBottom: "4%" }}>
            / Experiences ⎯⎯⎯⎯⎯⎯⎯
          </strong>
        </p>
        <div className="hint">Click a role to view details</div>
      </div>

      <div className="experiences-container">
        <nav className="exp-list" aria-label="Experience list">
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              className={`exp-btn ${exp.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(exp.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveId(exp.id);
                }
              }}
              aria-pressed={exp.id === activeId}
            >
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-mini-date">{exp.date.replace(" — ", " • ")}</div>
            </button>
          ))}
        </nav>

        <div className="divider" aria-hidden="true" />

        <article className="exp-details" aria-live="polite">
          <header>
            <h3 className="exp-headline">
              {active.title} <span className="dash">—</span> <span className="company-name">{active.company}</span>
            </h3>
            <div className="exp-meta">{active.date} • {active.location}</div>
          </header>

          <ul className="exp-bullets">
            {active.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="exp-tech" aria-hidden="false">
            {active.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
