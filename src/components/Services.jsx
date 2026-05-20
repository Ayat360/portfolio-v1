import {
  FiLayout,
  FiCode,
  FiSmartphone
} from "react-icons/fi";

import Reveal from "./Reveal";

const services = [

  {
    icon: <FiLayout />,
    title: "Frontend Development",
    description:
      "Modern responsive frontend interfaces built with scalable architecture, smooth interactions, and premium user experience."
  },

  {
    icon: <FiCode />,
    title: "Fullstack Web Applications",
    description:
      "Professional web applications using React and Flask with clean backend integration and optimized performance."
  },

  {
    icon: <FiSmartphone />,
    title: "Responsive Website Design",
    description:
      "Mobile-first websites optimized for all screen sizes with modern layouts, accessibility, and seamless responsiveness."
  }

];

export default function Services() {

  return (

    <section
      className="services section"
      id="services"
    >

      <div className="container">

        <Reveal>

          <span className="section-tag">
            Services
          </span>

          <h2 className="section-title">

            Professional development solutions built for modern businesses.

          </h2>

        </Reveal>

        <div className="services-grid">

          {services.map((service, index) => (

            <Reveal
              key={index}
              delay={index * 0.15}
            >

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}