import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    id: "p1",
    title: "SuperFANS Leadership",
    description:
      "Oversaw 44 FANS for Westminster Business School, serving as first point of contact during Welcome Week. Ensured smooth operations, delivered support, and drove accountability through structured reporting.",
    tags: ["Leadership", "Operations", "Reporting"],
    github: null
  },
  {
    id: "p2",
    title: "School & Course Representation",
    description:
      "Conducted qualitative research via surveys and feedback sessions to identify academic performance trends. Produced reports that influenced leadership decisions, driving a 20% improvement in student KPIs.",
    tags: ["Research", "Data Analysis", "Advocacy"],
    github: null
  },
  {
    id: "p3",
    title: "Team Captain (Malang)",
    description:
      "Directed choreography and coordination for high-quality performances. Guided the team to secure 3 awards during the 2024–25 academic year through leadership and creative vision.",
    tags: ["Team Leadership", "Events", "Creative Direction"],
    github: null
  },
  {
    id: "p4",
    title: "Project Manager (Student Co-creator)",
    description:
      "Led focus groups and qualitative data collection on responsible consumption, contributing to a research project that advanced ethical consumer literacy.",
    tags: ["Project Management", "Qualitative Research", "Sustainability"],
    github: null
  },
  {
    id: "p5",
    title: "Student as Co-creator",
    description:
      "Analysed academic documents to measure sustainability integration. Produced recommendations aligning curriculum with green skills demand from employers.",
    tags: ["Sustainability", "Curriculum", "Policy"],
    github: null
  },
  {
    id: "p6",
    title: "Model United Nations (2022)",
    description:
      "Crafted two marketing trailers that boosted engagement by 60%, reaching over 10,000 accounts on social media. Awarded for marketing & content creation.",
    tags: ["Content", "Marketing", "Video"],
    github: null
  },
  {
    id: "p7",
    title: "Digital Content Creator",
    description:
      "Produced multimedia campaigns for The Squire Group, engaging 5,000+ accounts. Delivered KPI-based performance analysis to measure impact and refine strategy.",
    tags: ["Content Strategy", "Analytics", "Social Media"],
    github: null
  },
  {
    id: "p8",
    title: "Chief Organizer (ENCORE 2021)",
    description:
      "Spearheaded logistics and financial management for a cultural event with 250+ attendees. Produced promotional trailers and ensured seamless event execution.",
    tags: ["Event Management", "Budgeting", "Production"],
    github: null
  }
];

export default function Projects() {
  return (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <section id="projects" aria-labelledby="projects-heading">
        <p id="projects-heading" className="h1">
          <strong >/ Leadership & Initiatives ⎯⎯⎯</strong>
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card" aria-labelledby={`${p.id}-title`}>
              <div className="card-header">
                <h4 id={`${p.id}-title`} className="project-title">
                  {p.title}
                </h4>

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    aria-label={`Open ${p.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                ) : (
                  <div className="github-placeholder" aria-hidden="true" />
                )}
              </div>

              <p className="project-desc">{p.description}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
