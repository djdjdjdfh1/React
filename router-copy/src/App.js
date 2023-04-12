import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './page/Home';
import About from './page/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
