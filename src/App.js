import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Dashboard searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
