import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const techStack = [
  { name: "HTML", bgColor: "bg-orange-500" },
  { name: "CSS", bgColor: "bg-blue-500" },
  { name: "JavaScript", bgColor: "bg-yellow-400 text-black" },
  { name: "React", bgColor: "bg-cyan-500" },
  { name: "Tailwind", bgColor: "bg-teal-400" },
  { name: "Bootstrap", bgColor: "bg-purple-500" },
  { name: "Next.js", bgColor: "bg-black text-white" },
  { name: "Strapi", bgColor: "bg-indigo-500" },
  { name: "Redux", bgColor: "bg-purple-700 text-white" },
  { name: "Git", bgColor: "bg-orange-600 text-white" },
  { name: "GitHub", bgColor: "bg-gray-800 text-white" },
  { name: "Jira", bgColor: "bg-blue-700 text-white" },
  { name: "Bitbucket", bgColor: "bg-blue-900 text-white" },
  { name: "REST APIs", bgColor: "bg-red-500" },
  { name: "Supabase", bgColor: "bg-green-600" },
];

export default function TechStackCard() {
  return (
    <div className="w-full max-w-md bg-[#ecfdf5] p-6 rounded-2xl shadow-2xl border border-green-200 font-[Inter] transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300/60">
      <h2 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-green-700 mb-4">
        <FaTools className="text-green-600" />
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <motion.span
            key={tech.name}
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.1,
            }}
            className={`px-4 py-1 rounded-full text-sm font-semibold shadow-md ${tech.bgColor}`}
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
