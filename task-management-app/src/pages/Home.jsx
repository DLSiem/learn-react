import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectDetails from "../components/ProjectDetails";

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  return (
    <div className="md:flex">
      <Sidebar
        selectedProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />
      <ProjectDetails selectedProjectId={selectedProjectId} />
    </div>
  );
};

export default Home;
