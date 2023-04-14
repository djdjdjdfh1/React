import React from 'react'
import '../css/main.css'

export default function Main() {
  return (
    <div>
      <div className='background-img'></div>
      <div className='background-letter'>
        <h1>중식</h1>
        <p>중식은 짜장면, 짬뽕, 볶음밥, 탕수육 등이 대표적이다</p>
      </div>
      <div className='background2-img'></div>
      <div className='background2-letter'>
        <h1>한식</h1>
        <p>한식은 비빔밥, 불고기, 삼겹살, 불닭볶음면 등이 맛있다</p>
      </div>
    </div>
  )
}
