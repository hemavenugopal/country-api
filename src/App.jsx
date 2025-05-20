import {BrowserRouter,Route,Routes} from "react-router-dom"
// import { useState } from 'react'

import {Details} from './pages/Details'
import {Lists} from './pages/Lists'


import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Lists />} />
      <Route path="/country/:name" element={<Details />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
