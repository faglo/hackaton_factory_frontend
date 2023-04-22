import React from 'react'
import '../styles/Kanban.css'
export default function KanbanColumn ({
  children
}) {
  return (
    <div>
      <div className='kc__header__container'>
        <div className='kc__header__text__header'>
          На согласовании
        </div>
        <div className='kc__header__text__subheader'>
          4 документа
        </div>
        <div style={{
          border: '3px solid #7B61FF',
          borderRadius: '200px'
        }}>
        </div>
      </div>
      <div className='kc__body__container'>
        {children}
      </div>
    </div>
  )
}
