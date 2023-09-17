import React from 'react'
// import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Dashboard from './Dashboard'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </>
  )
}
