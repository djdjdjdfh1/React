import React, {useState} from 'react'

const JsonData = React.createContext("");

const JsonProvider = ({children}) => {
    const [menuList, setMenuList] = useState([]);
    const [num, setNum] = useState(12);

    const getMenu = async()=> {
        const promise = await fetch(
        "http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=kbdzVMi2epmiXU2EiAFMtH8wc1aeUX7uisnfxHS26jeglsuSc0rdvJJbCYWgZfO5YlhZy0Bi%2Fl9XO9ufa5xdgQ%3D%3D&numOfRows=150&pageNo=1&resultType=json"
        );
        const response = await promise.json();
        setMenuList(response.getFoodKr.item);
    }
    const [commentList, setCommentList] = useState(
        [
            {
                cid : 1,
                UC_SEQ : 70,
                text : "너무 맛도리에용"
            },
            {
                cid : 2,
                UC_SEQ : 7,
                text : "존맛탱이요"
            },
            {
                cid : 3,
                UC_SEQ : 72,
                text : "맛이요"
            },
            {
                cid : 4,
                UC_SEQ : 70,
                text : "개추요"
            },
            {
                cid : 5,
                UC_SEQ : 72,
                text : "존맛탱이요"
            },
            {
                cid : 6,
                UC_SEQ : 70,
                text : "소주가온나"
            },
            {
                cid : 7,
                UC_SEQ : 70,
                text : "와이"
            },
            {
                cid : 8,
                UC_SEQ : 72,
                text : "기본요"
            },
            {
                cid : 9,
                UC_SEQ : 70,
                text : "맛이 힘들어요"
            },
            {
                cid : 10,
                UC_SEQ : 72,
                text : "존맛탱이요"
            },
            {
                cid : 11,
                UC_SEQ : 163,
                text : "스시는 화명이지"
            }
        ]
    );

    const value = {
        state : {menuList, commentList, num},
        action : {setMenuList, setCommentList, setNum},
        func : {getMenu}
    }

    return (
        <JsonData.Provider value={value}>
            {children}
        </JsonData.Provider>
    )
}

export {JsonProvider};
export default JsonData;