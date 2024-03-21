import { createPortal } from 'react-dom';
import { forwardRef, useEffect } from 'react';

const AddProjectModal = forwardRef(({onProjectModalClose, OnProjectAddSubmit}, refs) => {
    const { titleRef, commentRef, dateRef } = refs;

    useEffect(() => {
        if (titleRef.current) {
          titleRef.current.focus();
        }
      }, [titleRef]);
    
    return (
        createPortal(
        <div className='absolute bg-stone-50 pt-5 h-full pr-44' style={{left: '400px', width: 'calc(100% - 400px)'}}>
            <form className='flex flex-col pt-5' onSubmit={OnProjectAddSubmit}>
                <div className='flex justify-end gap-x-5'>
                    <button onClick={onProjectModalClose}>Cancel</button>
                    <button type='submit' className='btn-primary'>Save</button>
                </div>
                <label htmlFor="title">Title</label>
                <input ref={titleRef} type="text" name="title" />
                <label htmlFor="description">Description</label>
                <textarea ref={commentRef} type="text" name="description" rows='10'  />
                <label htmlFor="date">Date</label>
                <input ref={dateRef} type="date" name="date" />
            </form>
        </div>,
        document.getElementById('modal-root') )
    )
})

export default AddProjectModal;