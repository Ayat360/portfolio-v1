import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

function App() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / total) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>
    <Loader />
    <Cursor />
    <Helmet>
  <title>Aregbe Ayatulah Adekunle | Frontend Web Developer in Nigeria</title>

  <meta
    name="description"
    content="Professional Frontend Web Developer in Nigeria specializing in React, Tailwind CSS, Flask, and modern responsive web applications. Available for freelance projects worldwide."
  />

  <meta
    name="keywords"
    content="Frontend Developer Nigeria, React Developer Lagos, Web Developer Nigeria, UI Designer Nigeria, Freelance Web Developer, Portfolio Website Nigeria"
  />

  <meta name="author" content="Aregbe Ayatulah Adekunle" />

  <meta property="og:title" content="Frontend Web Developer Portfolio - Nigeria" />
  <meta
    property="og:description"
    content="Modern portfolio showcasing frontend development skills using React, Tailwind CSS, and Flask backend."
  />

  <meta property="og:type" content="website" />
</Helmet>

      {/* Scroll Progress Bar */}
      <div className="scroll-bar">
        <div style={{ width: `${scroll}%` }}></div>
      </div>

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />

    </>

  );
}

export default App;