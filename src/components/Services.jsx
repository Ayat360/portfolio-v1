import { motion } from "framer-motion";
import {
  FiLayout,
  FiCode,
  FiSmartphone,
  FiServer
} from "react-icons/fi";

const services = [

  {
    icon: <FiLayout />,
    title: "Frontend Development",
    description:
      "Building premium responsive interfaces with clean architecture and scalable frontend systems.",
  },

  {
    icon: <FiCode />,
    title: "React Web Apps",
    description:
      "Modern React applications focused on performance, responsiveness, and user experience.",
  },

  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Creating mobile-first websites optimized across phones, tablets, and desktops.",
  },

  {
    icon: <FiServer />,
    title: "Backend Integration",
    description:
      "Connecting frontend applications with Flask APIs and scalable backend services.",
  },

];

export default function Services() {

  return (

    <section
      className="services section"
      id="services"
    >

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <span className="section-tag">
            Services
          </span>

          <h2 className="section-title">

            Building modern digital products with clean engineering.

          </h2>

          <p className="section-subtitle">

            I help brands and businesses create modern responsive websites and scalable frontend applications with polished user experiences.

          </p>

          <div className="services-grid">

            {
              services.map((service, index) => (

                <motion.div
                  className="service-card"
                  key={index}
                  whileHover={{ y:-10 }}
                >

                  <div className="service-icon">

                    {service.icon}

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </motion.div>

              ))
            }

          </div>

        </motion.div>

      </div>

    </section>

  );

}