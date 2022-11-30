import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';
import Routeguard from './RouteGuard/Routeguard';
import Characters from './components/Characters/Characters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<Routeguard />} >
          <Route path='characters' element={<Characters />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
