import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Screen/Login";
import Creation from "./Screen/Creation";
import Forgot from "./Screen/Forgot";
import Reset from "./Screen/Reset";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/Reset' element={ <Reset/>}/>
        <Route path='/Creation' element={ <Creation/>}/>
        <Route path='/Forgot' element={ <Forgot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
