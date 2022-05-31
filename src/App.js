import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';



const App = () => {
  return (
    <>
      <div className="App">
      <Routes>
      <Route  path = "/" element = {<Home />} />
      </Routes>
      </div>
    </>
  )
}

export default App