import React from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function StoryList() {
  const num = ["one","two","three"];
  return (
    <div>
        <h3>StoryList</h3>
        <Outlet />
        {
        num.map((f, i)=>(
        <Link to={`/story/${f}`} key={i}> {f}Story |</Link>
        ))
        }  
    </div>
  )
}
