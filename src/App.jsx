import { useState } from 'react'
import './App.css'
import Header from './components/HeaderAndSideBar/Header'
import ListDisplay from './components/Listdisplay/ListDisplay'
import SideBar from './components/HeaderAndSideBar/SideBar'
import EntryDisplay from './components/EntryDisplay'
import NewEntryForm from './components/NewEntryForm'
import SortButton from './components/Listdisplay/SortButton'

function App() {

  return (
    <div className='h-screen'>
      <Header/>
      <div className='flex h-full  md:justify-center relative'>
        <div className='max-md:hidden h-full'>
          <SideBar/>
        </div>
          <SortButton/>
          <ListDisplay/> 
      </div>
      {/* <EntryDisplay/> 
      <NewEntryForm/> */}
    </div>
  )
}

export default App
