import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import UserContextProvider from './context/UserContextProvider'
import Socialmedia from './components/Socialmedia'

function App() {

  return (
    <UserContextProvider>
      <Socialmedia/>
     <Header/>
     
      
     
     <Outlet/>
     <Footer/>
     </UserContextProvider>
  )
}

export default App
