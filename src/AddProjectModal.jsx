import { createPortal } from 'react-dom';

export default function AddProjectModal({onProjectModalClose}) {
    return (
        createPortal(
        <div className='absolute bg-stone-50 pt-5 h-full pr-44' style={{left: '400px', width: 'calc(100% - 400px)'}}>
            <div className='flex justify-end gap-x-5'>
                <button onClick={onProjectModalClose}>Cancel</button>
                <button className='btn-primary'>Save</button>
            </div>
            <form className='flex flex-col'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description"  />
                <label htmlFor="date">Date</label>
                <input type="date" name="date" />
            </form>
        </div>,
        document.getElementById('modal-root') )
    )
}
