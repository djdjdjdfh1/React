import React from 'react'
import {Link} from 'react-router-dom'
import '../css/reset.css'
import '../css/navlink.css'

export default function NavBar() {
  return (
      <div className='nav-box'>
          <Link to={`/`}><h1>점심 뭐먹지</h1></Link>
          <div className='nav-menu'>
              <Link to={`/story`}><span>음식종류</span></Link>
              <Link to={`/main2`}><span>오늘의 메뉴추천</span></Link>
              <Link to={`/like`}><span>좋아요</span></Link>
          </div>
      </div>
  )
}
