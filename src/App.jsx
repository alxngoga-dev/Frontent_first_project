import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/layout'
import "./assets/Style/Nav.css"
import Home from './component/Home'
import Contact from './component/Contact'
import Blog from './component/Blog'
import Login from './component/login'
import Signup from './component/Signup'
import ForgotPassword from "./component/ForgotPassword";
import { Link } from "react-router-dom";
import Dahboard from './component/Dashbord'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dahboard />} />
    
        <Route
          path="/forgot-password"element={<ForgotPassword />}
        />
         
      </Routes>

    </BrowserRouter>
  );
}
export default App
