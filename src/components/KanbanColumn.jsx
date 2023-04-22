import React from 'react'
import '../styles/Kanban.css'
import { useDroppable } from '@dnd-kit/core'

export default function KanbanColumn ({
  children,
  name,
  count,
  color,
  id
}) {
  const { isOver, setNodeRef } = useDroppable({ id })
  const style = {
    backgroundColor: !isOver ? 'transparent' : '#fafafa',
    transotion: 'all 1s ease'
  }
  return (
    <div ref={setNodeRef} style={style}>
      <div className='kc__header__container'>
        <div className='kc__header__text__header'>
          {name}
        </div>
        <div className='kc__header__text__subheader'>
          {count} документа
        </div>
        <div style={{
          border: `3px solid ${color}`,
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
