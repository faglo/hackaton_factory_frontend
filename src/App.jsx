import React from 'react'
import './assets/fonts/stylesheet.css'
import './styles/App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Kanban from './screens/Kanban'
import Documents from './screens/Documents'

export default function App () {
  return (
    <div>
      <Nav>
        <Routes>
            <Route element={<Kanban />} path="/kanban" />
            <Route element={<Documents/>} path="/settings" />
          </Routes>
      </Nav>
    </div>
  )
}
