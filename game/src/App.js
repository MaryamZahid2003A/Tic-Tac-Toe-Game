import logo from './logo.svg';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Performance from './Performance';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';
import Flip from './Flip';
import Game from './Game';
function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Home/>}/>

        <Route path='/flip' element={<Flip/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/performance' element={<Performance/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
