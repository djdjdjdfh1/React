import React from 'react'
import NavBar from '../components/NavBar'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <NavBar />
        <Outlet />
        <footer>푸터입니다</footer>
    </div>
  )
}
