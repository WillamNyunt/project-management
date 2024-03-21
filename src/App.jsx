import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AddProjectModal from "./AddProjectModal";
import { useState, useRef } from "react";

function App() {
  let [projectModalOpen, setProjectModalOpen] = useState(false)

  const titleRef = useRef(null);
  const commentRef = useRef(null);
  const dateRef = useRef(null);

  function setProjectModal(value) {
    setProjectModalOpen(value)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar onProjectModalOpen={() => setProjectModal(true)} />
      {projectModalOpen && <AddProjectModal onProjectModalClose={() => setProjectModal(false)} />}
      <MainContent titleRef={titleRef} commentRef={commentRef} dateRef={dateRef} onProjectModalOpen={() => setProjectModal(true)} />
    </div>
  );
}

export default App;
