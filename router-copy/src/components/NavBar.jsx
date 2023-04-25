import React from 'react'
import {Link} from 'react-router-dom'
import '../css/reset.css'
import '../css/navlink.css'
import '../css/menu.css'

export default function NavBar() {
  return (
      <div className='nav-box'>
          <Link to={`/`}><h1>ENJOY FOOD</h1></Link>
          <div className='nav-menu'>
              <Link to={`/today`}><span>TODAY'S MENU</span></Link>
              <Link to={`/menu`}><span>MENULIST</span></Link>
              <Link to={`/like`}><span>LIKE</span></Link>
          </div>
      </div>
  )
}
