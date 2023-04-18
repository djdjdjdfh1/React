import React from 'react'

import { useParams } from 'react-router-dom'

export default function Story2() {
    const { name } = useParams(); // 객체
    const params = useParams();
  return (
    <div>
        <h1>{name}Story2 / {params.name} </h1>
        <p>{name}스토리2 페이지입니다 </p>
    </div>
  )
}
