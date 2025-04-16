import { Link } from "react-router-dom";
import {
  HomeIcon,
  FolderIcon,
  UserIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const handleClose = () => setIsSidebarOpen(false);
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
      className={`fixed lg:static top-0 left-0 h-full lg:h-[110vh] w-64 lg:w-[18%] bg-[#e7e4e4] border-r border-green-500 shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between p-5 lg:p-8 lg:block">
        <button
          onClick={() => {
            setIsSidebarOpen(false);
          }}
          className="lg:hidden mt-2"
        >
          <XMarkIcon className="h-6 w-6 text-green-600" />
        </button>
      </div>
      <ul className="flex flex-col gap-4 px-5">
        <Link to="/" onClick={handleClose}>
          <li className="flex items-center px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer transition-all">
            <HomeIcon className="h-5 w-5 text-green-600 mr-2" /> Home
          </li>
        </Link>

        <Link to="/projects" onClick={handleClose}>
          <li className="flex items-center px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer transition-all">
            <FolderIcon className="h-5 w-5 text-green-600 mr-2" />
            Projects
          </li>
        </Link>
        <Link to="/resume" onClick={handleClose}>
          <li className="flex items-center px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer transition-all">
            <UserIcon className="h-5 w-5 text-green-600 mr-2" />
            My Resume
          </li>
        </Link>
        <Link to="/contact" onClick={handleClose}>
          <li className="flex items-center px-4 py-2 rounded-md hover:bg-green-100 cursor-pointer transition-all">
            <CogIcon className="h-5 w-5 text-green-600 mr-2" />
            Contact
          </li>
        </Link>
      </ul>
    </motion.aside>
  );
}
