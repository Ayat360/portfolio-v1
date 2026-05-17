import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone
} from "react-icons/fi";

export default function Contact() {

  return (

    <section
      className="contact section"
      id="contact"
    >

      <div className="container">

        <motion.div
          className="contact-grid"
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          viewport={{ once:true }}
        >

          <div className="contact-info">

            <span className="section-tag">
              Contact
            </span>

            <h2 className="section-title">

              Let’s build something exceptional together.

            </h2>

            <p className="section-subtitle">

              I’m available for freelance projects, business websites, frontend development, and modern web application collaborations.

            </p>

            <div className="contact-details">

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMail />
                </div>

                <div>
                  <h4>Email</h4>
                  <p>aregbeadekunle@gmail.com</p>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <h4>Phone</h4>
                  <p>07082798562</p>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMapPin />
                </div>

                <div>
                  <h4>Location</h4>
                  <p>Lagos, Nigeria</p>
                </div>

              </div>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Tell me about your project..."
              rows="6"
            ></textarea>

            <button type="submit">

              Send Message

            </button>

          </form>

        </motion.div>

      </div>

    </section>

  );

}