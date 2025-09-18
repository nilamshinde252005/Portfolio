import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

export default function About() {
    return (
        <div>
            <section id="about">
                <main className="main">

                    <p className="h1"> <strong style={{ color: "pink" }}>/ About me ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>  </p>

                    <div className="tech-section">
                        <div className="left-col">

                            <p style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                                I am currently pursuing a Bachelor’s in Computer Science at 
                                <strong style={{ color: "#21edb7" }}> University of Westminster,</strong>
                                while building experience on projects involving React, Node.js, Express, and REST APIs.
                                I’ve also been expanding my knowledge through a Full-Stack Web Development Bootcamp at 
                                <strong style={{ color: "#21edb7" }}> University of Edinburgh.</strong>
                            </p>

                            <p>Here are some technologies I have been working with:</p>


                            <div className="languages">
                                <ul className="ul">
                                    <li>React.js</li>
                                    <li>JavaScript</li>
                                    <li>C++</li>
                                </ul>

                                <ul className="ul">
                                    <li>PHP (basic)</li>
                                    <li>Python</li>
                                    <li>TypeScript (basic)</li>
                                </ul>
                            </div>
                        </div>
                        <img src="/vite.svg" alt="Portfolio Icon" />
                    </div>


                </main>
            </section>
        </div>
    )
}