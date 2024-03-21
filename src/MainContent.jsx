import React from 'react'

export default function MainContent(props) {
    return (
        <div className='w-full p-10 m-5'>
            <div className='gap-y-5 flex flex-col justify-items-center items-center'>
                <img style={{ height: '150px', width: '150px' }} src='logo.png' alt='no project image' />
                <h2 className='text-3xl font-bold'>No project selected</h2>
                <p>Select a project or get started with a new one</p>
                <button className='bg-gray-800 text-slate-100 p-4 rounded-lg'>Create new projects</button>
            </div>
        </div>
    )
}
