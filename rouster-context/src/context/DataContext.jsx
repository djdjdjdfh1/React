import React, { useState } from 'react';

const DataContext = React.createContext("");

// 데이터값을 가진 Provider 컴퍼넌트 작성
// DataContext에 들어갈 value 값의 특징
// : 2개 이상의 페이지 컴퍼넌트에서 사용할때 작성
// : 페이지 컴퍼넌트 - path로 연결된 컴퍼넌트
const DataProvider = ({children}) => {
    // 데이터를 저장 및 수정하기위해 useState사용
    const [boardlist, setBoardlist] = useState([
        {
            "id" : 1,
            "title" : "첫번째 게시물입니다",
            "content" : "내용을 작성하였습니다",
            "date" : "2023-04-14",
            "writer" : "green"
        },
        {
            "id" : 2,
            "title" : "두번째 게시물입니다",
            "content" : "내용을 작성하였습니다",
            "date" : "2023-04-14",
            "writer" : "green"
        }, 
        {
            "id" : 3,
            "title" : "세번째 게시물입니다",
            "content" : "내용을 작성하였습니다",
            "date" : "2023-04-17",
            "writer" : "green"
        }
    ]);

    // id값을 전달하기위해 useState()로 작성
    const [id, setId] = useState(4);

    // user값을 사용하기 위해 useState() 작성
    const [user, setUser] = useState(
        {writer: "익명", login: false}
    )

    // commentlist 값 저장
    // id, text, date, writer, boardId
    const [commentlist, setCommentlist] = useState([
        {
            cid : 1,
            boardId : 1,
            text : "첫번째 게시글의 코멘트입니다",
            date : "2023-04-19",
            writer : "green"
        },
        {
            cid : 2,
            boardId : 3,
            text : "세번째 게시글의 코멘트입니다",
            date : "2023-04-19",
            writer : "green"
        }
    ]);

    // value에 담을 데이터 정리
    const value = {
        state : {boardlist, id, user, commentlist},
        action : {setBoardlist, setId, setUser, setCommentlist}
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

// 값을 전달하기위해 감싸는 컴퍼넌트
export {DataProvider};
// 값을 사용하기위해 호출하는 컴퍼넌트
export default DataContext;