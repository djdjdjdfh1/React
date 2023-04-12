import React from 'react'
import '../css/headerlink.css'

import { Link, NavLink } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정하기
export default function HeaderLink() {
  const fruit = "banana";
  return (
    <div>
        {/* a태그 대신 컴퍼넌트의 주소로 이동 */}
        <NavLink 
        className={({isActive})=>isActive ? "link-style" : undefined} 
        to="/about"
        >
          About
        </NavLink>
        {/* to의 속성값으로 자바스크립트의 문자열 가능 */}
        <NavLink 
        to={`/story/${fruit}`}
        className={({isActive})=>isActive ? "link-style" : undefined} 
        >
          Story
        </NavLink>
        <NavLink 
        to={`/articles`}
        className={({isActive})=>isActive ? "link-style" : undefined} 
        end
        >
          Articles
        </NavLink>    
        <NavLink 
        to={`/story2`}
        className={({isActive})=>isActive ? "link-style" : undefined} 
        >
          Story2List
        </NavLink>
        <NavLink 
        to={`/navigate`}
        className={({isActive})=>isActive ? "link-style" : undefined} 
        end // 주소가 완전히 일치할때만 class이름 추가
        >
          Navigate
        </NavLink>
    </div>
  )
}
