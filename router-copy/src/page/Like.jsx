import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../css/menu.css'

export default function Like() {
  const [heart, setHeart] = useState(true);
  const [menuList,setMenuList] = useState([]);

  const getMenu = async()=> {
    const promise = await fetch(
      "http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=kbdzVMi2epmiXU2EiAFMtH8wc1aeUX7uisnfxHS26jeglsuSc0rdvJJbCYWgZfO5YlhZy0Bi%2Fl9XO9ufa5xdgQ%3D%3D&numOfRows=8&pageNo=2&resultType=json"
      );
    const response = await promise.json();
    setMenuList(response.getFoodKr.item);
  }

  const [loading, setLoading] = useState(false);
  useEffect(()=>{getMenu();}, [])
  useEffect(()=>{
    // menuList의 처음값이 빈값으로 들어감
    // 빈값이 아닌 값이 들어갔을때 화면에 출력
    if(menuList.length>0) {
        // 값이 들어왔다면 true로 바꿔서 화면출력
        setLoading(true);
    }
  }, [menuList])

  return (
    <div>
        <h1>Like</h1>
        <p>좋아요 페이지입니다</p>
        <br />
        <br />
        <br />
        <br />
        <div className='box-wrap'>
          {loading && menuList.map((item, index)=>(
            <div 
            key={item.UC_SEQ}
            className='img-box'
            >
              <div 
              className={ heart ? "like" : "click-like"}
              onClick={() => {

              }}
              ></div>
              {/*<img src={item.MAIN_IMG_THUMB}></img>}*/}
              <div className='img' style={{backgroundImage: `url(${item.MAIN_IMG_THUMB})`}}></div>
              <h3>{item.MAIN_TITLE}</h3>
              <p>{item.ITEMCNTNTS}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
