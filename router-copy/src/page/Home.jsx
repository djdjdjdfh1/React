import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>홈페이지 입니다</p>
        <p><Link to="/about">about</Link></p>
    </div>
  )
}
