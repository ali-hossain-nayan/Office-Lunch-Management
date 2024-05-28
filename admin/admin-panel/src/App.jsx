import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddMenu from './pages/AddMenu/AddMenu'
import ListMenu from './pages/ListMenu/ListMenu'
import ViewMenu from './pages/ViewMenu/ViewMenu'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<AddMenu />} />
          <Route path="/list" element={<ListMenu />} />
          <Route path="/view" element={<ViewMenu />} />
        </Routes>
      </div>
    </div>
  )
}

export default App