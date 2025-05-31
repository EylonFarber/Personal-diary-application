import { useState } from 'react'
import './App.css'
import Header from './components/HeaderAndSideBar/Header'
import ListDisplay from './components/Listdisplay/ListDisplay'
import SideBar from './components/HeaderAndSideBar/SideBar'

function App() {

  return (
    <div className='md:h-screen'>
     <Header/>
     <ListDisplay/>
     <SideBar/>
    </div>
  )
}

export default App
