import React, { useState } from 'react'

export default function BoardWriteForm() {
    // 사용자로 입력받아올 공간을 useState로 작성
    const [title, setTitle] = useState("");  
    const [content, setContent] = useState("");

    // Context에서 작성한 value의 state의 boardlist의 값을 추가
    // value의 action의 setBoardlist에 접근해서 작성한 새로운 값 추가
    // todolist에서 값을 추가할때 생각,
    // 이전의 배열을 들고와서 뒤에 concat()을 통해 새로운 배열을 만들어 추가
    // * 위와 같이 데이터를 쓰는이유 : 
    // 서버의 데이터베이스를 사용하지않고 자바스크립트로 값을 저장하고있기때문

    // 글 추가 메소드
    const addBoard = () => {}

  return (
    <div>
        <h3>BoardWriteForm</h3>
        <label htmlFor="">제목</label>
        <input type="text" 
            onChange={(e)=>{setTitle(e.target.value)}}
        />
        <br />
        <textarea name="" id="" cols="30" rows="10"
            onChange={(e)=>{setContent(e.target.value)}}
        >
        </textarea>
        <button onClick={addBoard}>
            글 작성 완료
        </button>
    </div>
  )
}
