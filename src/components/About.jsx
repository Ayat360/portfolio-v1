import { motion } from "framer-motion";

export default function About() {

  return (

    <section
      className="about section"
      id="about"
    >

      <div className="container">

        <motion.div
          className="about-grid"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <div className="about-card">

            <div className="about-line"></div>

            <h3>
              Frontend Developer
            </h3>

            <p>
              Building scalable interfaces and modern digital experiences with precision, performance, and clean design systems.
            </p>

          </div>

          <div className="about-content">

            <span className="section-tag">
              About Me
            </span>

            <h2 className="section-title">

              Designing experiences that feel modern, intuitive, and powerful.

            </h2>

            <p className="section-subtitle">

              I’m a frontend web developer based in Nigeria focused on creating premium responsive websites and scalable web applications using modern frontend technologies.

              I combine clean frontend engineering with visually polished UI systems to help brands, businesses, and startups stand out online.

            </p>

            <div className="about-stats">

              <div className="stat-box">

                <h3>20+</h3>

                <p>Projects Built</p>

              </div>

              <div className="stat-box">

                <h3>100%</h3>

                <p>Responsive Design</p>

              </div>

              <div className="stat-box">

                <h3>Modern</h3>

                <p>Frontend Stack</p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}