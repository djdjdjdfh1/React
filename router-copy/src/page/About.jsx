import React from 'react'
import {useParams} from 'react-router-dom'

export default function About() {
    const {value} = useParams();
  return (
    <div>
        <h1>{value} About</h1>
        <p>{value} About페이지입니다</p>
    </div>
  )
}
