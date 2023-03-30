import logo from './logo.svg';
import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';

function App() {
  return (
    <div className="App">
      {/* props를 사용하는 클래스컴퍼넌트 */}
      <PropsComp color = "red">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>
      {/* state를 사용하는 클래스 컴퍼넌트
        버튼을 클릭할때마다 10씩 증가하는 컴퍼넌트
      */}
      <CountComp/>
        {/* props, state를 사용하는 클래스컴퍼넌트 
          props의 num값을 가져와서 버튼을 클릭할때마다 num씩증가
        */}
      <CountPropsComp num={5}/>
    </div>
  );
}

export default App;
