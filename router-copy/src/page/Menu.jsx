import React from 'react'
import '../css/menu.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import JsonData from '../context/JsonData';

export default function Menu() {
  const value = useContext(JsonData);
  const {state, action, func} = value;
  const {menuList, commentList, num} = state;
  const {setNum, setCommentList} = action;
  const {getMenu} = func;
  const [preComment, setPreComment] = useState("");

  const [heart, setHeart] = useState([]);
  const [lightimg, setLightimg] = useState();
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const addComment = (c) => {
    const newComment = {
      cid : num,
      UC_SEQ : c,
      text : text
    }
    setNum(num +1);
    const newList = commentList.concat(newComment);
    setCommentList(newList);
  }

  const showComment = (c) => {
    const cList = commentList.filter((a)=>(a.UC_SEQ === c))
    return cList; 
  }
  
  useEffect(()=>{getMenu()}, []);
  useEffect(()=>{
    if(menuList.length>0) {
        setLoading(true);
    }
  }, [menuList])

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
        <h1>음식종류</h1>
        <p>음식종류 페이지입니다</p>
        <br />
        <br />
        <br />
        <div className='menu-header'>
           <h1>전체</h1>
           <p>리뷰 많은 순</p>
        </div>

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

              <div className={lightimg ? 'light-box-on' : 'light-box-off'}> 
                <div>
                  <button
                  onClick={()=>{
                    setLightimg(null);
                  }}
                  className="btn"
                  >
                    X
                  </button>
                  <img src={lightimg}></img>
                  <br />
                  <br />
                  <label htmlFor="">내용</label>
                  <input 
                  type="text"
                  onChange={(e)=>(setText(e.target.value))}
                  value={text}
                  />
                  <br />
                  <button
                  onClick={()=>{
                    addComment(preComment);
                    setText("");
                  }}
                  >
                  등록
                  </button>
                  <hr />
                  {loading && showComment(preComment).map((comment, i)=>(
                    <p key={i}>익명 : {comment.text}</p>
                  ))}
                </div> 
              </div>

              <div className= 'img' 
              style={{backgroundImage: `url(${item.MAIN_IMG_THUMB})`}}
              onClick={()=>{
                setLightimg(item.MAIN_IMG_THUMB)
                setPreComment(item.UC_SEQ)
              }}              
              >
              </div>
              <h3>{item.MAIN_TITLE}</h3>
              <p>{item.ADDR1}</p>
              <p>{item.USAGE_DAY_WEEK_AND_TIME}</p>
            </div>
          ))}
          { currentItems.length === itemsPerPage && (
            <button onClick={()=> {handleLoadMore()}}>Load More</button>
            )      
          }
        </div>
    </div>
  )
}
