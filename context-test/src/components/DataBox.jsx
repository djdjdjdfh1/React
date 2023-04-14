import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useState } from 'react'

export default function DataBox() {
  return (
    <div>
        <DataText></DataText>
    </div>
  )
}

function DataText () {
    // useContext와 작성한 Context를 가져와서 사용
    const value = useContext(DataContext)

    // input 태그의 값받아와서 input에 저장
    // 버튼을 눌렀을때 Context에 있는 이름이 바뀌게 작성
    const [input,setInput] = useState("");

    // value 값이 null 또는 값
    // null일떄는 false 이므로 값 출력x
    // 값일때는 true이므로 그 값 출력
    return (
        <div>
            {value && <h3>{value.state.name}</h3>}
            <input type="text" 
            onChange={(e)=>{setInput(e.target.value)}}
            />
            <button
            onClick={()=>{value.action.setName(input)}}
            >
                버튼을 누르면 name 수정
            </button>
            
        </div>
    )
}
