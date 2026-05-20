import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import restaurant from "../assets/projects/restaurant.jpg";
import business from "../assets/projects/business.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import rangerover from "../assets/projects/rangerover.jpg";

const projects = [
  {
    image: restaurant,
    title: "Restaurant Landing Page",
    category: "Frontend Development",
    description:
      "A premium responsive restaurant website with elegant UI systems, smooth animations, and modern frontend architecture.",
    live: "https://slush-cafe.vercel.app/",
    github: "https://github.com/Ayat360/Slush-Cafe",
  },
  {
    image: business,
    title: "Dammy Confectionery Website",
    category: "Creative Design",
    description:
      "Modern responsive confectionery website with professional UI and scalable frontend architecture.",
    live: "https://dammy-confectionery.vercel.app/",
    github: "https://github.com/Ayat360/Dammy-Confectionery",
  },
  {
    image: ecommerce,
    title: "More Grace Business Website",
    category: "Corporate Website",
    description:
      "Professional business website focused on branding, trust-building, and scalable digital presence.",
    live: "https://more-grace-blessing-nig-ent.vercel.app/",
    github: "https://github.com/Ayat360/More-Grace-Blessing-Nig.-Ent",
  },
  {
    image: rangerover,
    title: "Range Rover Specialist Portfolio",
    category: "Frontend Development",
    description:
      "Clean service-focused website with structured layout and modern UI flow for automotive branding.",
    live: "https://ayat360.github.io/RangeRover_specialist/",
    github: "https://github.com/Ayat360/RangeRover_specialist",
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Featured Projects</span>

          <h2 className="section-title">
            Selected work built with modern frontend technologies.
          </h2>

          <p className="section-subtitle">
            A showcase of scalable, performance-driven websites built with clean
            UI systems, modern architecture, and real-world business impact.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="image-overlay"></div>

                  <span>{project.category}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-buttons">
                    <a
                      href={project.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <FiArrowUpRight />
                    </a>

                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}