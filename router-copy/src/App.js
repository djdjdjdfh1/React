import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Layout from './page/Layout';
import Main from './page/Main'
import Today from './page/Today';
import Menu from './page/Menu';
import Like from './page/Like';
import { JsonProvider } from './context/JsonData';
import Search from './page/Search';

function App() {
  return (
    <div>   
      <JsonProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Main />} />
            <Route path='/today' element={<Today />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/like' element={<Like />} />
          </Route>
        </Routes>
      </JsonProvider>
    </div>
  );
}

export default App;
