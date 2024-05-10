import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import StoreContextProvider from './context/storeContext'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


function App() {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Router>
       <StoreContextProvider>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </StoreContextProvider>
      </Router>
      </div>
      <Footer/>

      </>
      
  )
}

export default App



