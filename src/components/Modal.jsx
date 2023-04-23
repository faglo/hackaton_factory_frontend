import React from 'react'
import '../styles/Modal.css'
import close from '../assets/icons/close.svg'

export default function Modal ({ children, open }) {
  if (open) return null
  return (
    <div className='modal__container'>
      <div className='modal__window'>
        <img className='modal__close' src={close}/>
        {children}
      </div>
    </div>
  )
}
