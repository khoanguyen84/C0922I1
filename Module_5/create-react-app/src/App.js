import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LearnUseEffect from './components/UseEffect/LearnUseEffect';
import LearnUseState2 from './components/UseState/LearnUseState2';
import Login from './components/UseState/Login';
import TwoWayBinding from './components/UseState/TwoWayBinding';
import StaffApp from './components/UseState/StaffApp';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LearnUseState2/>}/>
        <Route path='/useState'  element={<LearnUseState2/>}/>
        <Route path='/useState'  element={<LearnUseState2/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/two-way-binding'  element={<TwoWayBinding/>}/>
        <Route path='/staff-app'  element={<StaffApp/>}/>
      </Routes>
    </>
  );
}

export default App;
