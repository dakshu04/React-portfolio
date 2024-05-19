
import logo from "../assets/DakshPurohitLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"
export const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <motion.img
            initial={{ opacity: 0 }}  // Initial opacity set to 0 (fully transparent)
            animate={{ opacity: 1 }}  // Animate opacity to 1 (fully opaque)
            transition={{ duration: 0.5, delay: 0.5 }}  // Transition duration and delay 
            style={{ width: "50px", height: "50px", borderRadius: '20px'}}
            className= "mx-2 w-10" src={logo} alt= "logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
};


