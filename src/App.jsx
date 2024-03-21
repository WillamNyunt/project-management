import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AddProjectModal from "./AddProjectModal";
import { useState } from "react";

function App() {
  let [projectModalOpen, setProjectModalOpen] = useState(false)

  function setProjectModal(value) {
    setProjectModalOpen(value)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar onProjectModalOpen={() => setProjectModal(true)} />
      {projectModalOpen && <AddProjectModal onProjectModalClose={() => setProjectModal(false)} />}
      <MainContent onProjectModalOpen={() => setProjectModal(true)} />
    </div>
  );
}

export default App;
