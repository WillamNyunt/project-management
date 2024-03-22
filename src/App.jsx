import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AddProjectModal from "./AddProjectModal";
import { useState, useRef } from "react";

function App() {
  let [modalOpen, setModalOpen] = useState(false)
  let [projects, setProjects] = useState([])
  
  const titleRef = useRef(null);
  const commentRef = useRef(null);
  const dateRef = useRef(null);

  function setProjectModal(value) {
    setModalOpen(value)
  }

  function handleProjectAddSubmit(e){
    e.preventDefault()
    const title = titleRef.current.value;
    const comment = commentRef.current.value;
    const date = dateRef.current.value;
    setProjects(project => [...project, {title: title, comment: comment, date: date, tasks: []}])
    setProjectModalOpen(false)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar projects={projects} onProjectModalOpen={() => setModalOpen('add-project-modal')} />
      {modalOpen === 'add-project-modal' && <AddProjectModal onProjectModalClose={() => setModalOpen(false)} OnProjectAddSubmit={(e) => handleProjectAddSubmit(e)} ref={{titleRef, commentRef, dateRef}} />}
      
      <MainContent onProjectModalOpen={() => setModalOpen('add-project-modal')} />
    </div>
  );
}

export default App;
