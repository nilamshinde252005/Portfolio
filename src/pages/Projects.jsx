import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import CarouselImage from "../components/CarouselImage";

export default function Projects() {
  return (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <section id="projects">
        <p className="h1">
          <strong style={{ color: "pink" }}>/ Projects ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>
        </p>

        <CarouselImage />

        <div className="projects-grid">

          <div className="project-card">
            <a
              href="https://github.com/nilamshinde252005/withYOu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <strong>withyou –</strong>
            <p>
              A pixel-themed journaling & productivity web app with JWT sign-in,
              to-do lists, custom rules, and a “magic book” daily entry feature.
            </p>
          </div>


          <div className="project-card">
            <a
              href="https://github.com/nilamshinde252005/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <strong>Portfolio Website –</strong>
            <p>
              Personal portfolio built with React, Vite, and React Router. It
              showcases projects, skills, and my coding journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
