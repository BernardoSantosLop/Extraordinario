import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/usuario/Login';
import { useAuthState } from "react-firebase-hooks/auth";
import {  auth } from "./service/firebase";
import Dashboard from './components/perfil/panel';



function App() {
  const [user] = useAuthState(auth);

  
  return (
    <div className='App'>
      
      {
        user ? (
          <Dashboard user = {user}></Dashboard>
        ):(
          <Login></Login>
        )
      }
     
    </div>





  );
}

export default App;
