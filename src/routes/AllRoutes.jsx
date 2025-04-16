import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactMe from "../pages/ContactMe";
import Project from "../pages/Project";
import Resume from "../pages/Resume";

const AllRoutes = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        }
      />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AllRoutes;
