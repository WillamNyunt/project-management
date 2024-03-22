import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AddProjectModal from "./AddProjectModal";
import { useState, useRef } from "react";
import ProjectTaskModal from "./ProjectTaskModal";

function App() {
  let [modalOpen, setModalOpen] = useState({type: false, data: null})
  let [projects, setProjects] = useState([])
  
  const titleRef = useRef(null);
  const commentRef = useRef(null);
  const dateRef = useRef(null);

  function handleProjectAddSubmit(e){
    e.preventDefault()
    const title = titleRef.current.value;
    const comment = commentRef.current.value;
    const date = dateRef.current.value;
    setProjects(project => [...project, {title: title, comment: comment, date: date, tasks: []}])
    setModalOpen({type: false, data: []})
  }
  
  function handleProjectDelete(project) {
    let previousProjects = [...projects]
    const index = previousProjects.indexOf(project)
    if (index > -1) {
      previousProjects.splice(index, 1)
      setProjects(previousProjects)
      setModalOpen({type: false, data: []})
    } else {
      return
    }
  }

  function handleOpenProjectTaskModal(index) {
    setModalOpen({type: 'project-task-modal', data: projects[index]})
  }

  function handleTaskAdd(project, task){
    let previousProjects = [...projects]
    const index = previousProjects.indexOf(project)
    previousProjects[index].tasks.push(task)
    setProjects(previousProjects)
  }

  function handleTaskDelete(project, task, taskIndex){
    let newProjects = [...projects]
    const newProject = newProjects[newProjects.indexOf(project)]
    newProject.tasks.splice(taskIndex, 1)
    setProjects(newProjects)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar projects={projects} onProjectModalOpen={() => setModalOpen({type: 'add-project-modal', data: null})} onOpenProjectTaskModal={handleOpenProjectTaskModal} />
      {modalOpen.type === 'add-project-modal' && <AddProjectModal onProjectModalClose={() => setModalOpen({type: false, data: []})} OnProjectAddSubmit={(e) => handleProjectAddSubmit(e)} ref={{titleRef, commentRef, dateRef}} />}
      {modalOpen.type === 'project-task-modal' && <ProjectTaskModal project={modalOpen.data} onProjectDelete={(project) => handleProjectDelete(project)} onTaskAdd={handleTaskAdd} onTaskDelete={handleTaskDelete} />}
      <MainContent onProjectModalOpen={() => setModalOpen({type: 'add-project-modal', data: null})} />
    </div>
  );
}

export default App;
