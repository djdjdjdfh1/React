import React from 'react'
import { Link, Outlet } from 'react-router-dom';

// 게시글 목록을 보여주는 페이지 컴퍼넌트
export default function Articles() {
    // 배열을 사용해서 목록작성
    const list = [1,2,3,4,5];

  return (
    <div>
        <h3>Articles 목록</h3>
        {/* 중첩 라우터를 사용한 Route에 들어갔을때
            연결된 페이지 컴퍼넌트가 보인다
        */}
        <Outlet />
        {
            list.map((id)=>(
            <Link to={`/articles/${id}`} key={id}> 게시글{id} |</Link>)
        )}
    </div>
  )
}
