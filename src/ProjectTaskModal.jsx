import React from 'react'
import Modal from './Modal'

export default function ProjectTaskModal({ project, onProjectDelete }) {
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
                <input type='text' className='flex-grow' />
                <button>Add task</button>
            </div>
        </Modal>
    )
}
