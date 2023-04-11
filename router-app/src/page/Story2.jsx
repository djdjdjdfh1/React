import React from 'react'

import { useParams } from 'react-router-dom'

export default function Story2() {
    const { name } = useParams(); // 객체
  return (
    <div>
        <h1>{name}Story</h1>
        <p>{name}스토리 페이지입니다 </p>
    </div>
  )
}
