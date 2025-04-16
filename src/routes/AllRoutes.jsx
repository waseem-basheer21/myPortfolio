import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

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
    </Routes>
  );
};

export default AllRoutes;
