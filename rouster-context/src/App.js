import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import BoardList from './page/BoardList'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/boardlist' element={<BoardList />}/>
      </Routes>
    </div>
  );
}

export default App;
