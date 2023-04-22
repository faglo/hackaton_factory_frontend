import React from 'react'
import './assets/fonts/stylesheet.css'
import './styles/App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Kanban from './screens/Kanban'
import Documents from './screens/Documents'
import Main from './screens/Main'

export default function App () {
  return (
    <div>
      <Nav>
        <Routes>
            <Route element={<Kanban />} path="/kanban" />
            <Route element={<Documents/>} path="/settings" />
            <Route element={<Main/>} path="/" />
          </Routes>
      </Nav>
    </div>
  )
}
