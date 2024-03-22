import React from 'react'
import Modal from './Modal'
import { useRef } from 'react'

export default function ProjectTaskModal({ project, onProjectDelete, onTaskAdd, onTaskDelete }) {
    const taskRef = useRef('')
    return (
        <Modal>
            <div className="flex flex-col gap-y-5">
                <div>
                    {project.title}
                    <button onClick={() => onProjectDelete(project)}>Delete</button>
                </div>
                <p>{project.date}</p>
                <p>{project.comment}</p>
            </div>
            <hr/>
            <h2>Tasks</h2>
            <div className='flex flex-row justify-between'>
                <input ref={taskRef} type='text' className='flex-grow' />
                <button onClick={() => onTaskAdd(project, taskRef.current.value)}>Add task</button>
            </div>
            <ul className='mt-5'>
                {project.tasks.map(
                    (task, index) => {
                        console.log(index)
                        return <li key={index} className='flex justify-between'>{task}<button onClick={() => onTaskDelete(project, task, index)}>Delete</button></li>
                    }    
                )}
            </ul>
        </Modal>
    )
}
