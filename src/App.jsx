import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/layout'
import "./assets/Style/Nav.css"
import Home from './component/Home'
import Contact from './component/Contact'
import Blog from './component/Blog'
import Signup from './component/registrationform'

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element = {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/blog' element = {<Blog/>}/>
        
        </Route>
         <Route path='/signup' element = {<Signup/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
