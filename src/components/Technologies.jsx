import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { easeInOut, motion } from "framer-motion";

const hoverEffect = {
  scale: 1.25,
transition: { duration: 0.3, easeInOut },
zIndex: 1, // Adjust the z-axis to bring the element forward on hover
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // Moves from 10 to -10
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse", // Reverses the direction each time
    },
  },
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileHover={hoverEffect}
      whileInView={{opacity: 1, y: 0 }}
      transition={{duration: 1.5 }}
      initial={{ opacity: 0, y: -100 }}
      className="my-20 text-center text-4xl">Technologies</motion.h1>

    <motion.div
     whileInView={{ opacity:1 , x: 0}}
     initial={{ opacity: 0, x: -100 }}
     transition = {{ duration : 1.5 }}
    className="flex flex-wrap items-center justify-center gap-4">
      
      <motion.div 
        variants={iconVariants(2)}
        initial="initial" 
        animate="animate"
        whileHover={hoverEffect}
         className="rounded-2xl border-4 text-orange-600 border-neutral-800">
        <DiHtml5 className="text-7xl" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial" 
        animate="animate"
        whileHover={hoverEffect}
        className="rounded-2xl border-4 border-neutral-800">
        <DiCss3Full className="text-7xl text-sky-700" />
        </motion.div>
      
      <motion.div 
      variants={iconVariants(2)}
      initial="initial" 
      animate="animate"
      whileHover={hoverEffect}
       className="rounded-2xl border-4 border-neutral-800 p-0.5">     
      <RiReactjsLine className="text-7xl text-cyan-400" />
      </motion.div>

      <motion.div 
        variants={iconVariants(3.5)}
        initial="initial" 
        animate="animate"
        whileHover={hoverEffect}
        className="rounded-2xl border-4 border-neutral-800">
        <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial" 
        animate="animate"
        whileHover={hoverEffect}
        className="rounded-2xl border-4 border-neutral-800">
        <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        

        <motion.div 
        variants={iconVariants(3)}
        initial="initial" 
        animate="animate"
        whileHover={hoverEffect}
        className="rounded-2xl border-4 border-neutral-800">
        <DiJava className="text-7xl text-red-700" />
        </motion.div>


      </motion.div>
    </div>
  )
}
