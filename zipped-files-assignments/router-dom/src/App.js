import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='welcome' element={<Welcome/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
