import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LearnUseState from './components/UseState/LearnUseState';
import LearnUseEffect from './components/UseEffect/LearnUseEffect';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LearnUseState/>}/>
        <Route path='/useState'  element={<LearnUseState/>}/>
        <Route path='/useEffect'  element={<LearnUseEffect/>}/>
      </Routes>
    </>
  );
}

export default App;
