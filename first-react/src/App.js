import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
// 동일한 파일에서 두개이상 내보냈을때, 그 각각의 값을
// 각각 가져와야 쓸수 있다
import LoginComp from './components/LoginComp';
import { LoginText } from './components/LoginComp';

import TextComp from './components/TextComp';
import OtherComp from './components/OtherComp';

import StateComp from './components/StateComp';
import EventComp from './components/EventComp';
import LoginCompo from './components/LoginCompo';

import RefDomEvent from './components/RefDomEvent';

import MapComp from './components/MapComp';

import MemoComp from './components/MemoComp';

import LifeCycle from './components/LifeCycle';

import ArrowComponent from './components/ArrowComponent';
import ArrowTest from './components/ArrowTest';
import ArrowState from './components/ArrowState';

import PropsComp from './components/PropsComp';
import CountPropsComp from './components/CountPropsComp';

import EffectHook from './components/EffectHook';
import EffectHook2 from './components/EffectHook2';
// 리액트에서 오류가 뜨는 이유
// 1. 존재하지 않는 컴퍼넌트 출력
// (컴퍼넌트를 만든 이후에 이름은 가능하면 바꾸지 말 것)
// >> 이름을 바꾼 후에는 바꾼 그 이름으로 모든 컴퍼넌트 수정
// 2. {}를 닫지 않았을 경우
// >> 오류코드를 보면서 각 line에 있는 코드들을 주석/삭제 처리하면서 확인
function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 값을 props전달 */}
      <LoginComp login={true} name="홍길동" />
      {/* 컴포넌트사이에 글자를 적으면 props의 children으로 전달 */}
      {/* props값을 전달하지 않으면 undefined로 들어감 */}
      <LoginComp>내용 전달</LoginComp>
      {/** 새로운 TextComp를 만들어서 
       * children에 들어간 값을 h1태그에 넣어서 출력하세요
       * name값을 받아와서 p태그에 name님 을 출력하세요
       */}
      <TextComp name="홍길동">반갑습니다</TextComp>
      <TextComp name="성춘향">환영합니다</TextComp>
      <OtherComp name={123}/>

      {/* State를 가진 컴퍼넌트 */}
      <StateComp/>

      {/* 이벤트 */}
      <EventComp/>

      {/* LoginComp 작성후
        state: name , login: false
        <input>에서 name 받아오기
        <button>에서 login true 만들기
        <h1> name 출력 > login값이 true일때 화면에 출력
      */}
      <LoginCompo/>

      {/* RefDom */}
      <RefDomEvent/>

      {/* 컴퍼넌트의 반복 */}
      <MapComp/>

      {/* 기록장 작성 
        memoList : [
          {id:1, memo:"기록", time:new Date()},
          {id:2, memo:"연습", time:new Date()},
        ]
        state를 이용하여, memoList의 내용을 map으로
        li태그에 출력하세요
        input 태그로 입력, button 클릭 추가, li 클릭 삭제
      */}
      <MemoComp/> 

      {/* 라이프사이클 */}
      <LifeCycle/>

      {/* 함수형 컴퍼넌트 */}
      <ArrowComponent text = "문자열을 전달" />
      <ArrowComponent>children으로 전달</ArrowComponent>

      {/* 함수형 컴퍼넌트 실습
        아래 컴퍼넌트를 함수형으로 만들고 출력하기
        name = "green" : h3 태그로 출력,
        childeren = "환영합니다" : p 태그로 출력
        check={true} : check값이 true일때 name 출력
      */}
      <ArrowTest
      name = "green"
      check = {true}
      >
        환영합니다 
      </ArrowTest>

      {/* 함수형 컴퍼넌트의 state 사용 */}
      <ArrowState />

      <PropsComp color="blue">props값을 받아와서 글자색을 바꿉니다</PropsComp>

      <CountPropsComp num = {20}/>

      {/* 함수형컴퍼넌트의 hook 사용 */}
      <EffectHook />

      {/* 함수형 컴퍼넌트의 useEffect응용 */}
      <EffectHook2 />
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;
