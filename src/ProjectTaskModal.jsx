import React from 'react'
import Modal from './Modal'

export default function ProjectTaskModal({ project, onProjectDelete }) {
    return (
        <Modal>
            <div>
                <div>
                    {project.title}
                    <button onClick={() => onProjectDelete(project)}>Delete</button>
                </div>
                {project.date}
                {project.description}
            </div>
            <hr/>
            <h2>Tasks</h2>
        </Modal>
    )
}
