import React from "react";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
     <Navbar />
     
      <Routes> 
        <Route path='/registration' element={<Registration />}/>
        <Route path='/registration/login' element={<Login />}/>
      </Routes>
    
   </>
  );
}

export default App;
