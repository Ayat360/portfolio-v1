import Reveal from "./Reveal";

const skillGroups = [

  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and scalable interfaces with clean architecture and smooth user experiences.",
    tech: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "Framer Motion",
      "Responsive Design"
    ]
  },

  {
    title: "Backend Development",
    description:
      "Developing secure backend systems, APIs, and application logic with scalable structures.",
    tech: [
      "Python",
      "Flask",
      "REST APIs",
      "Authentication",
      "Database Integration"
    ]
  },

  {
    title: "Tools & Workflow",
    description:
      "Using modern developer workflows and tools for efficient collaboration and production-ready development.",
    tech: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Render"
    ]
  }

];

export default function Skills() {

  return (

    <section
      className="skills section"
      id="skills"
    >

      <div className="container">

        <Reveal>

          <span className="section-tag">
            Tech Stack
          </span>

          <h2 className="section-title">
            Modern technologies for high-performance digital products.
          </h2>

        </Reveal>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <Reveal
              key={index}
              delay={index * 0.15}
            >

              <div className="skill-card">

                <h3>{group.title}</h3>

                <p>
                  {group.description}
                </p>

                <div className="tech-list">

                  {group.tech.map((item, i) => (

                    <span key={i}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}