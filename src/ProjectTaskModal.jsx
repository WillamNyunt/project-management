import React from 'react'
import Modal from './Modal'

export default function ProjectTaskModal({ project }) {
    return (
        <Modal>
            <div>
                <div>
                    {project.title}
                    <button onClick={() => console.log('delete project')}>Delete</button>
                </div>
                {project.date}
                {project.description}
            </div>
            <hr/>
            <h2>Tasks</h2>
        </Modal>
    )
}
