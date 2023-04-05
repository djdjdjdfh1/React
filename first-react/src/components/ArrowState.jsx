// 16.8버전 이후로 함수형에서 state사용 가능
import {useState} from "react";

// css파일 들고오기
import './arrowState.css'

// 화면의 업데이트에 상관없이 사용하는 변수
// 현재 컴퍼넌트에서 전역변수로 쓸 변수
let globalId = 4;

// 함수형 컴퍼넌트의 특징
// 1) this를 사용하지않는다
// 2) 안에 값을 넣어줄때 변수로 할당하므로 const / let 사용
const ArrowState = (props) => {
    // useState는 항상 함수(컴퍼넌트)안에 작성
    const [message,setMessage] = useState(
        {
            time: "10:53",
            text: "메세지입니다", 
        });
    // useState는 여러번 사용할 수 있다
    const [number,setNumber] = useState(0);
    const [array,setArray] = useState([1,2,3,4]);

    // map을 이용하여 id값과 name을 화면에 출력
    const [students,setStudents] = useState(
        [
            {id : 1, name : "홍길동", checked : true},
            {id : 2, name : "성춘향", checked : false},
            {id : 3, name : "흥부", checked: false},
        ]
    );

    // 학생이름을 받아올 공간
    const [inputName, setInputName] = useState("");
    
    // 클래스형에서 render()안에 값이 계속 초기화
    // 함수형에서는 함수안에 있는내용이 계속 초기화
    let id = 4;

    // 메소드 작성
    const inputChange = (e) => {setInputName(e.target.value)};

    const addStudent = () => {
        // 값을 받아와서 새로운 배열로 만들기
        // 새로운 배열 students 할당
        const newStudents = students.concat(
            {
                id: globalId++,
                name: inputName,
            }
        );
        console.log(newStudents);
        setStudents(newStudents);
        setInputName("");
    }

    // id값을 전달하여 메소드 안에서 사용
    const deleteStudent = (id) => {
        // 클릭한 id값을 제외하고 새로운 배열 작성
        const newStudents = students.filter(
            (s)=> s.id !== id  
            )
            setStudents(newStudents);
        }


    return (
        <div>
            <p>{number}, {message.text}</p>
            <button
            // useState로 작성한 함수를 통해서 값을 넣어줄때
            // 그 값의 자료형이 같지 않아도 넣어준다
            // 작성할때 그 값의 자료형을 확인하고 동일한 형태로 할당
            // 객체/배열의 일부분만 수정해서 넣을때 사용하는 연산자 
            // ...(스프레드 연산자 사용) : 객체나 배열 안에있는 값을 꺼내서 사용
            // 객체에서 동일한 속성이름을 사용하면 마지막에 적은 값 사용
            onClick={()=>{setMessage({...message, text : "수정된 내용"})}}
            >
                글자값 수정
            </button>
            {
                array.map((num,i)=><li key={i}>{num}</li>)
            }

            <h3>학생추가</h3>
            {/* 인풋태그 및 버튼으로 리스트 추가 */}
            <input 
            type="text" 
            onChange={inputChange}
            value={inputName}
            />
            <button
            onClick={addStudent}
            >
                추가
            </button>

            {/* 리스트 3개 출력 */}
            <ul>
                {
                    students.map((student)=>
                    <li 
                    key= {student.id}
                    className={student.checked ? "on" : ""}
                    >
                        <input type="checkbox"
                            checked={student.checked}
                            readOnly
                            onClick={() => {
                                // 체크박스를 클릭하면, 클릭한 객체의 checked 값이 바뀜
                                // map을 이용하여 작성
                                // map() = 배열안의 요소의 값을 return을 통해 새로운 배열만듦
                                // 클릭한 객체를 찾았다면 그 객체의 checked 값을 수정해서 return
                                const newStudents = students.map((s) => {
                                    // s통해서 각각의 객체값 확인
                                    // 1) 클릭한 체크박스의 id값과 모든 s의 id와 비교
                                    // 2) id 값이 같지않다면 원래 객체
                                    // 3) id 값이 같다면 checked 값을 !을 이용하여 수정한 객체
                                    if(student.id !== s.id) {
                                        return s;
                                    } else {
                                        // 원래 객체에서 checked 값만 수정하기 위해서
                                        // s 안에있는 속성을 ...(스프레드 연산자)를 이용해서 추가
                                        // 수정할 속성인 checked를 작성해서 수정
                                        return {...s, checked: !s.checked } 
                                    }
                                })
                                setStudents(newStudents);
                            }}  
                        />
                        {student.id}. {student.name}
                        <button
                            onClick={() => {deleteStudent(student.id)}}
                        >
                            X
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
} 

export default ArrowState;