import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideBar from "./components/SideBar";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen bg-[#5fb881] text-gray-800 font-[Inter] relative">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <div className="lg:hidden p-4 flex items-center bg-white border-b border-green-500 shadow-md">
          <button
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <Bars3Icon className="h-6 w-6 text-green-600" />
          </button>
        </div>
        <AllRoutes
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </main>
  );
}

export default App;
