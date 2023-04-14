import './App.css';
import Toolbar from './components/Toolbar';

// App에서 쓰기위해, App에서 React.createContext 호출
// App 과 Toolbar 둘다 ThemeContext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import ContextBox from './components/ContextBox';

function App() {
  return (
    <div className="App">
      {/* 작성한 context를 값을 사용할 컴퍼넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value={ {name:"홍길동", login:true} }>
          {/* ThemeContext와 ObjectContext값 확인 */}
          <Toolbar />
        </ObjectContext.Provider>
      </ThemeContext.Provider>
      
      {/* ContextBox를 가져와서 ThemeContext를 이용하여
          blue값을 전달하기
      */}
      <ThemeContext.Provider value="blue">
        <ContextBox/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
