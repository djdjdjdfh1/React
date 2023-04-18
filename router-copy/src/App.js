import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Layout from './page/Layout';
import Main from './page/Main'
import Modal from './page/Modal';
import Menu from './page/Menu';
import Like from './page/Like';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/modal' element={<Modal />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/like' element={<Like />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
