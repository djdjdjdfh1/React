import React from 'react'

export default function CommentComp(props) {
    // props로 전달한 comment를 구조분해를 통해서 쓰기 쉽게 작성
    const {writer, text, date, cid} = props.comment
  return (
    <div>
        <h5>{cid}/{writer}</h5>
        <p>{text}</p>
        <span>{date}</span>
        <button>X</button>
    </div>
  )
}
