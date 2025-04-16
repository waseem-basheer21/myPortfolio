import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import About from "../components/About";
import Socials from "../components/Socials";
import TechStackCard from "../components/TechStackCard";

export default function HomePage({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <section className="p-6 lg:p-8 overflow-y-auto">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 1,
          delay: 0.4,
        }}
        className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left"
      >
        <h1 className="text-[#f8f7f7] font-bold font-[Inter]">
          Your Next Developer Is Right Here — Dive Into My Work
        </h1>
      </motion.h1>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.6,
          delay: 0.4,
        }}
        onClick={() => isSidebarOpen && setIsSidebarOpen(false)}
        className="flex gap-18 justify-center lg:justify-start flex-wrap lg:flex-nowrap"
      >
        <ProfileCard />
        <Socials />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.6,
          delay: 0.4,
        }}
        className="mt-8 flex gap-8 flex-wrap justify-center lg:justify-start"
      >
        <About />
        <TechStackCard />
      </motion.div>
    </section>
  );
}
