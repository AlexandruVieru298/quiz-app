import React from 'react'
import './App.scss';
import Home from './pages/homePage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fail from './pages/failPage/Fail';
import Pass from './pages/passPage/Pass';
import Quiz from './pages/quizPage/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/fail' element={<Fail/>}></Route>
          <Route path='/pass' element={<Pass/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
