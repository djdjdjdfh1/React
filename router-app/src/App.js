import logo from './logo.svg';
import './App.css';
// 라우터를 가져오기위해 router-dom에서 컴퍼넌트 가져옴
import { Route, Routes } from 'react-router-dom';

// 각각의 페이지(하나에 주소에 보일 컴퍼넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Error from './page/Error';

function App() {
  return (
    // Routes를 이용하여 컴퍼넌트와 주소를 연결하는 Route를 정리
    // div안에 Routes를 넣어서 사용해도 상관없다
    <Routes>
      {/* app.js 안에서 Route 이용해서 주소와 컴퍼넌트 연결
        path : 주소 '/' 첫 화면에 보이는 주소
        element : 컴퍼넌트 { <Home /> }를 통해서 전달
      */}
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Story /> 컴퍼넌트 만들어서, '/story' 주소로 연결 
        확인은 주소창에 http://localhost:3000/story로 확인
      */}
      {/* URL 파라미터를 이용한 값 전달 
        path의 주소에 값이 들어갈 공간에 이름작성
        값은 브라우저에 주소창에 입력했을때 값이 들어감
      */}
      <Route path='/story/:value' element={<Story />} />
      {/* <Story />를 복사하여 <Story2 />로 수정하여 사용 
        URL 파라미터 이름을 name으로 작성
        URL 파라미터로 전달할 값은 green으로 작성해서
        useParams 이용해서 화면에 출력
      */}
      <Route path='/story2/:name' element={<Story2 />} />
      {/* path에 *을 넣으면 지정된 주소 외에는 전부 
        element로 연결된 컴포넌트가 출력된다
        위의 작성한 주소와 헷갈리지않게 아래에 두는 편
      */}
      <Route path='*' element={<Error />}/>
    </Routes>
  );
}

export default App;
