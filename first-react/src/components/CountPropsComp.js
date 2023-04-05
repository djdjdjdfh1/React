import { useState } from 'react';
const CountPropsComp = (props) => {
    const [number,setNumber] = useState(0);
    const [students,setStudents] = useState(
        [
            "김",
            "나",
            "박",
            "이",
        ]
    );
    return(
        <div>
            <p>{number}</p>
            <button
            onClick={()=>{setNumber(number+20)}}
            >
                +20
            </button>
            <input type="text"
            />
            <button
            onClick={()=>{
                const newStudents = students.concat({name:"송"})
                setStudents(newStudents);
            }}
            >
                확인
                {console.log(students)}
            </button>
        </div>
    )
} 
export default CountPropsComp;