import React from 'react'
import Modal from './Modal'
import { useRef } from 'react'

export default function ProjectTaskModal({ project, onProjectDelete, onTaskAdd, onTaskDelete }) {
    const taskRef = useRef('')

    function formattedDate(d) {
        const date = new Date(d);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
        return formattedDate
    }

    return (
        <Modal className='max-w-screen-lg'>
            <div className="flex flex-col gap-y-5 mt-10 pb-3">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-bold text-xl'>{project.title}</h2>
                    <button className='hover:text-red-800' onClick={() => onProjectDelete(project)}>Delete</button>
                </div>
                <p>{formattedDate(project.date)}</p>
                <p className='max-w-screen-md'>{project.comment}</p>
            </div>
            <hr />
            <h2 className='pt-3 pb-3 font-bold text-xl'>Tasks</h2>
            <div className='flex flex-row justify-between'>
                <input ref={taskRef} type='text' className='flex-grow items-center p-2' />
                <button className='hover:text-green-800' onClick={() => onTaskAdd(project, taskRef.current.value)}>Add task</button>
            </div>
            <ul className='mt-5'>
                {project.tasks.map(
                    (task, index) => {
                        return <li key={index} className='flex justify-between bg-slate-200 items-center p-2'>{task}<button className='hover:text-red-800' onClick={() => onTaskDelete(project, task, index)}>Clear</button></li>
                    }
                )}
            </ul>
        </Modal>
    )
}
