import { motion } from "framer-motion";

const skills = [

  "React",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "Flask",
  "Python",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "UI/UX"

];

export default function Skills() {

  return (

    <section
      className="skills section"
      id="skills"
    >

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <span className="section-tag">
            Tech Stack
          </span>

          <h2 className="section-title">

            Modern technologies for scalable frontend engineering.

          </h2>

          <p className="section-subtitle">

            I build modern responsive applications using industry-standard frontend and backend technologies focused on performance, accessibility, and elegant UI systems.

          </p>

          <div className="skills-grid">

            {
              skills.map((skill, index) => (

                <div
                  className="skill-card"
                  key={index}
                >

                  {skill}

                </div>

              ))
            }

          </div>

        </motion.div>

      </div>

    </section>

  );

}