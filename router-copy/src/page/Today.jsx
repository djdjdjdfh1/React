import React, { useContext, useEffect, useState } from 'react'
import '../css/menu.css'
import JsonData from '../context/JsonData'

export default function Today() {
  const [heart, setHeart] = useState([]);
  const [lightimg, setLightimg] = useState();
  const value = useContext(JsonData);
  const {state, func} = value;
  const {menuList} = state;
  const {getMenu} = func;
  const [ranMenu, setRanMenu] = useState([]); 

  const [loading, setLoading] = useState(false);

  useEffect(()=>{getMenu()}, []);
  useEffect(()=>{
    if(menuList.length>0) {
        setLoading(true);
    }
    
    const oneMenu = menuList[Math.floor(Math.random()*menuList.length)]
    setRanMenu(oneMenu);
  }, [menuList])


  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>결정하는게 어려운 분들을 위한 랜덤 추천</h1>
        <div className='box-wrap'>
          {loading &&
            <div 
            key={ranMenu.UC_SEQ}
            className='img-box'
            > 
            {/* 좋아요 이모티콘 */}
              <div 
              className={ heart.find((h)=>(h === ranMenu.UC_SEQ)) ? "click-like" : "like"}
              onClick={() => {
                if(heart.find((h)=>(h === ranMenu.UC_SEQ))) {
                  const remainHeart = heart.filter((h)=>(h !== ranMenu.UC_SEQ))
                  setHeart(remainHeart);
                } else {
                  const addHeart = heart.concat(ranMenu.UC_SEQ)
                  setHeart(addHeart);
                }
              }}
              > 
              </div>

              {/* 모달창 */}
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

              {/* 작은사진 */}
              <div className= 'img' 
              style={{backgroundImage: `url(${ranMenu.MAIN_IMG_THUMB})`}}
              onClick={()=>{
                setLightimg(ranMenu.MAIN_IMG_THUMB)
              }}              
              >
              </div>
              <h3>{ranMenu.MAIN_TITLE}</h3>
              <p>{ranMenu.ADDR1}</p>
              <p>{ranMenu.USAGE_DAY_WEEK_AND_TIME}</p>
            </div>
          }
        <button
        onClick={()=>{
          const oneMenu = menuList[Math.floor(Math.random()*menuList.length)]
          setRanMenu(oneMenu);
        }}
        >
          리셋
        </button>
        </div>
        오늘의 추천메뉴
    </div>
  )
}
