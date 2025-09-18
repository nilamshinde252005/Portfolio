import React, { useState } from "react";
import "../styles/Experiences.css";

const EXPERIENCES = [
    {
      id: "int1",
      title: "Software Development Intern",
      company: "Nyati Technologies Pvt. Ltd.",
      date: "Jun 2024 — Aug 2024",
      location: "Pune, India",
      bullets: [
        "Assisted in frontend development, focusing on React-based UI components and authentication systems.",
        "Collaborated with senior developers on feature development, debugging, and code reviews.",
        "Contributed to projects by following structured workflows and defined milestones.",
        "Improved proficiency in UI development, responsive design, and API consumption."
      ],
      tech: ["React", "JavaScript", "HTML5", "CSS3", "API Integration"]
    },
    {
      id: "int2",
      title: "Software Development Intern",
      company: "InTech Solutions",
      date: "Jul 2025 — May 2025",
      location: "Pune, India",
      bullets: [
        "Developed a student login and registration module with a React frontend and Express.js APIs.",
        "Designed clean and intuitive UI flows for authentication.",
        "Conducted testing and debugging of REST endpoints with Postman.",
        "Integrated APIs with backend logic for real-time data display."
      ],
      tech: ["React", "Node.js", "Express.js", "Postman"]
    }
  ];
  

export default function Experiences() {
    const [activeId, setActiveId] = useState(EXPERIENCES[0].id);
    const active = EXPERIENCES.find((e) => e.id === activeId);

    return (
        <section id="experiences" className="experiences-section">
            <p className="h1"> <strong style={{color:"pink",paddingBottom:"4%"}}>/ Experiences ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>  </p>

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
                        </button>
                    ))}
                </nav>


                <article className="exp-details" aria-live="polite">
                    <header>
                        <h3 className="exp-headline">{active.title} — {active.company}</h3>
                        <div className="exp-meta">{active.date} • {active.location}</div>
                    </header>

                    <ul className="exp-bullets" >
                        {active.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>

                    <div className="exp-tech">
                        {active.tech.map((t) => (
                            <span key={t} className="tech-pill">{t}</span>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}
