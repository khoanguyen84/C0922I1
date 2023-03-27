import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LearnUseEffect from './components/UseEffect/LearnUseEffect';
import LearnUseState2 from './components/UseState/LearnUseState2';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LearnUseState2/>}/>
        <Route path='/useState'  element={<LearnUseState2/>}/>
        <Route path='/useEffect'  element={<LearnUseEffect/>}/>
      </Routes>
    </>
  );
}

export default App;
