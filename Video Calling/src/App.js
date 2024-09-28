
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Room from './component/Room';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/room/:roomid' element={<Room/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
