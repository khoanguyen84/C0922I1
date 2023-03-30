import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LearnUseEffect from './components/UseEffect/LearnUseEffect';
import LearnUseState2 from './components/UseState/LearnUseState2';
import Login from './components/UseState/Login';
import TwoWayBinding from './components/UseState/TwoWayBinding';
import StaffApp from './components/UseState/StaffApp';
import Bill from './components/UseState/Bill';
import StaffAppAPI from './components/UseState/StaffAppAPI';
import StaffDetail from './components/UseState/StaffDetail';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<StaffApp/>}/>
        <Route path='/useState'  element={<LearnUseState2/>}/>
        <Route path='/useEffect'  element={<LearnUseEffect/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/two-way-binding'  element={<TwoWayBinding/>}/>
        <Route path='/staff-app'  element={<StaffApp/>}/>
        <Route path='/staff-app/staff-detail/:name/:position'  element={<StaffDetail/>}/>
        <Route path='/staff-app-api'  element={<StaffAppAPI/>}/>
        <Route path='/bill'  element={<Bill/>}/>
      </Routes>
    </>
  );
}

export default App;
