// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from '../pages/About'

function App() {


  return (
    <>
    <Header/>
    <main>
     <Routes>
      <Route path='/' element={<About/>}/>
     </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
