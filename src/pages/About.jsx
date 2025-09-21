import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

export default function About() {
    return (
        <div>
            <section id="about">
                <main className="main">

                    <p className="h1"> <strong >/ About me ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</strong>  </p>

                    <div className="tech-section">
                        <div className="left-col">

                            <p style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                                I am currently pursuing a <strong >BA (Hons) in Business Management (Entrepreneurship) </strong>
                                at the <strong >University of Westminster,</strong> where I combine academic excellence
                                with real-world leadership experience. I’ve led initiatives that improved student performance metrics by 20%,
                                designed impact-driven business strategies for international clients, and represented my peers as a
                                <strong > School Representative. </strong>
                                My journey so far reflects a passion for <em>leadership, strategy, and data</em> that creates measurable change.
                            </p>

                            <p>Here are some of the areas I have been making an impact in:</p>

                            <div className="languages">
                                <ul className="ul">
                                    <p>Soft skills</p>
                                    <li>Leadership & Team Management</li>
                                    <li>Stakeholder Engagement & Communication</li>
                                    <li>Problem-Solving & Strategic Thinking</li>
                                    <li>Collaboration & Cross-Cultural Teamwork</li>
                                    <li>Resilience & Adaptability</li>
                                </ul>

                                <ul className="ul">
                                    <p>Hard skills</p>
                                    <li>Financial & Business Modelling (Forecasting, Valuation, Reporting)</li>
                                    <li>Data Analysis & Quantitative Research (Excel, Smart Survey)</li>
                                    <li>Project Management</li><li>Digital Strategy & Marketing</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </main>
            </section>
        </div>
    )
}