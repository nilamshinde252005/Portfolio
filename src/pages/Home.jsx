import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import { ReactTyped } from "react-typed";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
            <section id="home">
                <header className="hero">
                    <img
                        src="/public/Cosmos (2).gif"
                        alt="Animated graphic"
                        className="hero-gif"
                    />
                    <p className="h1">

                        {" "}
                        <strong style={{ color: "pink" }}>
                            <ReactTyped
                                strings={["hi, I’m Nilam"]}
                                typeSpeed={150}
                                backSpeed={50}
                                showCursor={true}
                                cursorChar="|"
                                loop={false}
                            />
                        </strong>
                    </p>

                    <p className="h2">I love creating things that live on the internet.</p>
                    <p>
                        I’m a <strong>software engineer </strong>
                         (student) passionate about building
                        applications that are simple, useful, and meaningful.
                        I’m fascinated by <em>design, web technologies, and scalable apps</em>,
                        and I’m always learning new ways to turn ideas into reality.
                    </p>
                    <a className="cta" href="mailto:nilamshinde252005@gmail.com">
                        Say hi <FaEnvelope />
                    </a>
                </header>
            </section>

            <About />
            <Experiences />
            <Projects />
            <Footer/>
        </main>
    );
}
