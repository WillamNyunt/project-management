import React from 'react'

export default function Sidebar({projects, onProjectModalOpen}) {
    return (
        <aside className='flex flex-col gap-y-10 bg-gray-900 mt-5 p-4 rounded-r-lg' style={{width: '400px'}}>
            <h1 className='text-4xl font-bold text-slate-300 mt-5'>
                Your Projects
            </h1>
            <button className='btn-primary' onClick={onProjectModalOpen}>Add projects</button>
            <ul>
                {projects.map(project => {
                    console.log(project)
                    return (
                        <li key={project.title}>
                            <button className='btn-primary'>{project.title}</button>
                        </li> 
                    )
                })}
            </ul>
        </aside>
    )
}
