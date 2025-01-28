import { useState } from 'react'
import './App.css'
import AuctionLanding from './components/auctionSystem/AuctionLanding'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NavigationBar from './components/auctionSystem/components/NavigationBar'
import Footer from './components/auctionSystem/About Us/Footer'
import SignUpPage from './pages/SignUp'
import { SignupForm } from './pages/SignupForm'
// import Userside from './components/auctionSystem/UserSide'
import AuctionLayout from './components/auctionSystem/UserSide/AuctionLayout'
import SelectProperty from './components/auctionSystem/UserSide1/AuctionLayout'

function App() {
  

  return (
    <>
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<AuctionLanding/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      {/* <Route path="/sign-up-bankofficer" element={<SignupForm/>}/> */}
      <Route path="/userside" element={<AuctionLayout/>}/>
      <Route path="/selectproperty" element={<SelectProperty/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
