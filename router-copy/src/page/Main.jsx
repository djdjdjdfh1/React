import React, {useState, useEffect} from 'react'
import '../css/main.css'
import { useContext } from 'react';
import JsonData from '../context/JsonData';

export default function Main() {
  const [heart, setHeart] = useState([]);
  const [lightimg, setLightimg] = useState();

  const [ranMenu, setRanMenu] = useState([]);
  const value = useContext(JsonData);
  const {state, func} = value;
  const {menuList} = state;
  const {getMenu} = func;
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{getMenu()}, [])
  useEffect(()=>{
    // menuList의 처음값이 빈값으로 들어감
    // 빈값이 아닌 값이 들어갔을때 화면에 출력
    if(menuList.length>0) {
        // 값이 들어왔다면 true로 바꿔서 화면출력
        setLoading(true);
    }
    
    function genRandom2() {
      const a = [];
      const mySet = new Set();  

      while(mySet.size<8 && menuList.length !== 0) {
        mySet.add(Math.floor(Math.random()*menuList.length))
      }
      mySet.forEach((n)=>a.push(menuList[n]))
      setRanMenu(a);
    }
    genRandom2();
    console.log(ranMenu);
  }, [menuList])

  return (
    <div>
      <div className='background-img'></div>
      <div className='background-letter'>
        <h1>중식</h1>
        <p>중식은 짜장면, 짬뽕, 볶음밥, 탕수육 등이 대표적이다</p>
      </div>
      <div className='background2-img'></div>
      <div className='background2-letter'>
        <h1>한식</h1>
        <p>한식은 비빔밥, 불고기, 삼겹살, 불닭볶음면 등이 맛있다</p>
      </div>
      <br />

      {/* 랜덤음식박스 */}  
      <div className='box-wrap'>
          {loading && ranMenu.map((item)=>(
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
                  <hr />
                </div> 
              </div>

              {/* 작은사진 */}
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
        </div>
    </div>
  )
}
