import React from 'react'
import { useContext } from 'react'

// Context의 값을 가져오기위해서 Context 호출
import ThemeContext from '../context/ThemeContext'

export default function ContextBox() {
  return (
    <div>
        <ContextText></ContextText>
    </div>
  )
}

function ContextText () {
    const text = useContext(ThemeContext);
    // useContext() ThemeContext를 가져와서 출력하기
    return <p>{text}</p>
}
