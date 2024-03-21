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

  function handleProjectAddSubmit(e){
    e.preventDefault()
    const title = titleRef.current.value;
    const comment = commentRef.current.value;
    const date = dateRef.current.value;
    console.log(title)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar onProjectModalOpen={() => setProjectModal(true)} />
      {projectModalOpen && <AddProjectModal onProjectModalClose={() => setProjectModal(false)} OnProjectAddSubmit={(e) => handleProjectAddSubmit(e)} ref={{titleRef, commentRef, dateRef}} />}
      <MainContent onProjectModalOpen={() => setProjectModal(true)} />
    </div>
  );
}

export default App;
