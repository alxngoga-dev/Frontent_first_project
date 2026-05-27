import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/layout'
import "./assets/Style/Nav.css"
import Home from './component/Home'

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element = {<Layout/>}>
        <Route index element={<Home/>}/>
        
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
