import { useState } from 'react';

const PropsComp = (props) => {
    const [obj, setObj] = useState([
        {id: 1, name: "홍길동", checked: true},
    ]
    ) 
    return (
        <div>
            <p
            onClick={()=>{setObj({...obj, name : "홍길동"})}}
            >
                클릭하세요
                {console.log(obj)}
            </p>
            <p
        onClick={() => {setObj({...obj, checked : !obj.checked})}}
            >
                클릭
                {console.log(obj)}
            </p>
            <p style={{color: props.color}}>
                {props.children}
            </p>
        </div>
    )
}

export default PropsComp;