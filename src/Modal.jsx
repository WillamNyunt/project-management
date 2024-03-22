import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({children}) {
    return (
        createPortal(
        <div className='absolute bg-stone-50 pt-5 h-full pr-44' style={{left: '400px', width: 'calc(100% - 400px)'}}>
            {children}
        </div>,
        document.getElementById('modal-root'))
    )
}
