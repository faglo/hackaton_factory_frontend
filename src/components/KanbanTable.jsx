import React from 'react'
import KanbanColumn from './KanbanColumn'
import KanbanCard from './KanbanCard'

export default function KanbanTable () {
  return (
    <div>
      <KanbanColumn>
        <KanbanCard/>
      </KanbanColumn>
    </div>
  )
}
