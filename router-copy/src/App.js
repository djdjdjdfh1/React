import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar';
import Main from './page/Main';
import Main2 from './page/Main2';
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Like from './page/Like';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main2' element={<Main2 />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/story' element={<Story />}/>
        <Route path='/like' element={<Like />} />
      </Routes>
    </div>
  );
}

export default App;
