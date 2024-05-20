
import logo from "../assets/DakshPurohitLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

import { easeInOut, motion } from "framer-motion";

const hoverEffect = {
  scale: 1.5,
  zIndex: 1, // Adjust the z-axis to bring the element forward on hover
transition: { duration: 0.3, easeInOut },
};

const hoverEffect2 = {
  scale: 1.25,
transition: { duration: 0.3, easeInOut },
zIndex: 1, // Adjust the z-axis to bring the element forward on hover

};

export const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <motion.img
            whileHover={hoverEffect2}
            initial={{ opacity: 0 }}  // Initial opacity set to 0 (fully transparent)
            animate={{ opacity: 1 }}  // Animate opacity to 1 (fully opaque)
            transition={{ duration: 0.5, delay: 0.5 }}  // Transition duration and delay 
            style={{ width: "50px", height: "50px", borderRadius: '20px'}}
            className= "mx-2 w-10" src={logo} alt= "logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.div
          whileHover={hoverEffect}>
            <a href="https://www.linkedin.com/in/purohitdaksh/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </motion.div>
            <motion.div
            whileHover={hoverEffect}>
            <a href="https://github.com/dakshu04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </motion.div>
            <motion.div
            whileHover={hoverEffect}>
            <a href="https://x.com/DakshPurohit_03" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            </motion.div>
            <motion.div
            whileHover={hoverEffect}>
            <a href="mailto:purohitdaksh2003@gmail.com" target="_blank" rel="noopener noreferrer"><IoMdContact /></a>
            </motion.div>
        </div>
    </nav>
  )
};


