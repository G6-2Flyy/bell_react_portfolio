// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Analytics from './pages/AnalyticsPortfolio' 
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {


  return (
    <>
    <Header/>
    <main>
     <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/data_portfolio' element={<Analytics/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
     </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
