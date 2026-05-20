import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Reveal from "./Reveal";

export default function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      <div className="blur hero-blur"></div>

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >
         <Reveal delay={0.1}>
          <span className="hero-tag">
            Frontend Developer • Nigeria
          </span>
          </Reveal>
        <Reveal delay={0.2}>
          <h1>

            Crafting modern digital experiences with clean frontend engineering.

          </h1>
        </Reveal>

            <Reveal delay={0.3}>
          <div className="typewriter">

            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Creative Web Developer",
                2000,
                "UI Focused Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>
            </Reveal>

              <Reveal delay={0.4}>
          <p>

            I build premium responsive websites and modern web applications using React, Tailwind CSS, Bootstrap, Flask, and scalable frontend technologies.

          </p>
            </Reveal>

          <Reveal delay={0.5}>
          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Hire Me
            </a>

          </div>
            </Reveal>

        </motion.div>

      </div>

    </section>

  );

}