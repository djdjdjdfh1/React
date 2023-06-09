import React, {useContext} from 'react'

import DataContext from '../context/DataContext'
import { useState } from 'react';


// DataPrint 컴퍼넌트에서
// DataContext를 받아와서 name을 수정할수 있게하기
export default function DataPrint() {
  const value = useContext(DataContext);
  // 비구조화, {action} 은 속성값을 뺴온것. action이라고 저장햇으면 밑에 action.action.setName 써야함.
  const {action} = value;

  const [input,setInput] = useState("");
  
  return (
    <div>
        <input type="text" 
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <button
        onClick={()=>{action.setName(input)}}
        >
            이 버튼을 누르면 DataBox에 출력되는 값이 수정
        </button>
    </div>
  )
}
