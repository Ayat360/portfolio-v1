import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [

  {
    title: "Modern Restaurant Website",
    category: "Frontend Development",
    description:
      "A premium responsive restaurant website with smooth UI interactions, elegant layouts, and modern frontend architecture.",
  },

  {
    title: "Business Company Website",
    category: "Corporate Design",
    description:
      "Professional company website designed for branding, trust building, and scalable digital presence.",
  },

  {
    title: "E-Commerce Store",
    category: "Fullstack Development",
    description:
      "Modern ecommerce interface with responsive product layouts, optimized user experience, and scalable structure.",
  },

];

export default function Projects() {

  return (

    <section
      className="projects section"
      id="projects"
    >

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <span className="section-tag">
            Featured Projects
          </span>

          <h2 className="section-title">

            Selected work built with modern frontend technologies.

          </h2>

          <p className="section-subtitle">

            A showcase of premium responsive websites and scalable web applications designed with performance, clean UI systems, and professional frontend engineering principles.

          </p>

          <div className="projects-grid">

            {
              projects.map((project, index) => (

                <motion.div
                  className="project-card"
                  key={index}
                  whileHover={{ y:-10 }}
                  transition={{ duration:0.3 }}
                >

                  <div className="project-image">

                    <div className="image-overlay"></div>

                    <span>
                      {project.category}
                    </span>

                  </div>

                  <div className="project-content">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-buttons">

                      <a href="#">
                        Live Demo
                        <FiArrowUpRight />
                      </a>

                      <a href="#">
                        GitHub
                        <FiArrowUpRight />
                      </a>

                    </div>

                  </div>

                </motion.div>

              ))
            }

          </div>

        </motion.div>

      </div>

    </section>

  );

}