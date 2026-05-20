import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone
} from "react-icons/fi";

export default function Contact() {
    const [form, setForm] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    }

  } catch {
    alert("Error sending message");
  }
};

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

         <form className="contact-form" onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={form.name}
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={form.email}
    onChange={handleChange}
  />

  <textarea
    name="message"
    placeholder="Tell me about your project..."
    rows="6"
    value={form.message}
    onChange={handleChange}
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