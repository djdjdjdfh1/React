import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../css/menu.css'

export default function Like() {
  const [heart, setHeart] = useState([]);
  const [lightimg, setLightimg] = useState();
  const [menuList,setMenuList] = useState([]);

  const getMenu = async()=> {
    const promise = await fetch(
      "http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=kbdzVMi2epmiXU2EiAFMtH8wc1aeUX7uisnfxHS26jeglsuSc0rdvJJbCYWgZfO5YlhZy0Bi%2Fl9XO9ufa5xdgQ%3D%3D&numOfRows=150&pageNo=1&resultType=json"
      );
    const response = await promise.json();
    setMenuList(response.getFoodKr.item);
  }

  const [loading, setLoading] = useState(false);
  useEffect(()=>{getMenu()}, [])
  useEffect(()=>{
    // menuList의 처음값이 빈값으로 들어감
    // 빈값이 아닌 값이 들어갔을때 화면에 출력
    if(menuList.length>0) {
        // 값이 들어왔다면 true로 바꿔서 화면출력
        setLoading(true);
    } 
  }, [menuList])

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuList.slice(indexOfFirstItem, indexOfLastItem);
  
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
        <h1>Like</h1>
        <p>좋아요 페이지입니다</p>
        <br />
        <br />
        <br />
        <br />
        
        <div className='box-wrap'>
          {loading && currentItems.map((item)=>(
            <div 
            key={item.UC_SEQ}
            className='img-box'
            > 
            {/* 좋아요 이모티콘 */}
              <div 
              className={ heart.find((h)=>(h === item.UC_SEQ)) ? "click-like" : "like"}
              onClick={() => {
                if(heart.find((h)=>(h === item.UC_SEQ))) {
                  const remainHeart = heart.filter((h)=>(h !== item.UC_SEQ))
                  setHeart(remainHeart);
                } else {
                  const addHeart = heart.concat(item.UC_SEQ)
                  setHeart(addHeart);
                }
              }}
              > 
              </div>

              {/*<img src={item.MAIN_IMG_THUMB}></img>}*/}
              <div className={lightimg ? 'light-box-on' : 'light-box-off'}
              onClick={()=>{
                setLightimg(null);
              }}
              > 
                <div >
                  <img src={lightimg}></img>
                  <br />
                  <label htmlFor="">닉네임</label>
                  <input type="text" />
                  <br />
                  <label htmlFor="">내용</label>
                  <input type="text" />
                  <br />
                  <button>등록</button>
                </div> 
              </div>

              <div className= 'img' 
              style={{backgroundImage: `url(${item.MAIN_IMG_THUMB})`}}
              onClick={()=>{
                setLightimg(item.MAIN_IMG_THUMB)
              }}              
              >
              </div>
              <h3>{item.MAIN_TITLE}</h3>
              <p>{item.ADDR1}</p>
              <p>{item.USAGE_DAY_WEEK_AND_TIME}</p>
            </div>
          ))}
          {currentItems.length === itemsPerPage && (            
                <button onClick={()=> {handleLoadMore()}}>Load More</button>
          )}
        </div>
    </div>
  )
}
