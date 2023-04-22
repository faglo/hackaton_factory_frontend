import React from 'react'
import Filepicker from '../components/Filepicker'
import Categories from '../components/Categories'
import KanbanTable from '../components/KanbanTable'

export default function Kanban () {
  return (
    <>
      <Filepicker/>
      <Categories/>
      <KanbanTable/>
    </>
  )
}
