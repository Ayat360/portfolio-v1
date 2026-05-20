import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0 }) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.8,
        delay
      }}
      viewport={{ once: true }}
    >

      {children}

    </motion.div>

  );

}