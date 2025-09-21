import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import { ReactTyped } from "react-typed";
import Footer from "../components/Footer";
import cosmos from "../assets/cosmos2.gif";

export default function Home() {
    return (
        <main >
            <section id="home">
                <header className="hero">
                    <img
                        src={cosmos}
                        alt="Animated graphic"
                        className="hero-gif"
                    />
                    <p className="h1">
                        {" "}
                        <strong className="name-accent">
                            <ReactTyped
                                strings={["Hi, I’m Dia"]}
                                typeSpeed={150}
                                backSpeed={50}
                                showCursor={true}
                                cursorChar="|"
                                loop={false}
                            />
                        </strong>
                    </p>

                    <p className="h2">I thrive on leading with impact and creating meaningful change.</p>
                    <p className="lead">
                        I’m a <strong>business management student</strong> passionate about driving innovation,
                        empowering teams, and building initiatives that deliver measurable outcomes.
                        I’m fascinated by <em>leadership, strategy, investments and sustainable impact</em>, and
                        I bring a track record of turning ideas into results across various business disciplines, 
                        consulting, and community engagement.
                    </p>

                    <a className="cta" href="mailto:dia.wagle@gmail.com" aria-label="Email Dia">
                         <FaEnvelope className="cta-icon" />
                         <span className="cta-text">Get in touch</span>
                    </a>
                </header>
            </section>

            <About />
            <Experiences />
            <Projects />
            <Footer />
        </main>
    );
}
