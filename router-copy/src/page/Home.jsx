import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    const [menuList, setMenuList] = useState([]);
    const getMenu = async()=> {
    const promise = await fetch(
      "http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=kbdzVMi2epmiXU2EiAFMtH8wc1aeUX7uisnfxHS26jeglsuSc0rdvJJbCYWgZfO5YlhZy0Bi%2Fl9XO9ufa5xdgQ%3D%3D&numOfRows=50&pageNo=3&resultType=json"
      );
    const response = await promise.json();
    setMenuList(response.getFoodKr.item);
    console.log(response.getFoodKr.item)
  }
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      getMenu();
    },[])
    useEffect(()=>{
      // menuList의 처음값이 빈값으로 들어감
      // 빈값이 아닌 값이 들어갔을때 화면에 출력
      console.log(menuList)
      if(menuList.length>0) {
          // 값이 들어왔다면 true로 바꿔서 화면출력
          setLoading(true);
      }
  }, [menuList])

  return (
    <div>
        <h1>Home</h1>
        <p>홈페이지 입니다</p>
        <Link to="/about">about</Link>
        <hr />

        <Link to={`/story`}>storylist</Link>
        <p>공공데이터로 가져온 값 : {loading && menuList[0].MAIN_TITLE}</p>
    </div>
  )
}
