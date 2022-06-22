import React, { useState } from "react";
import logo from "../../img/logo.png"

import { signInWithGoogle } from "../../service/firebase";

function Login() {
  return (


    <div class="container5 " style={{ marginTop: "" }} >
     
      <div class="row vh-100 justify-content-around ">
        <div class="col-sm-2 ">
          <img src={logo} width="400px" />
         
        </div>
        <div class="col-sm-4 ">
          <div class="row vh-100 justify-content-around text-center ">
            <div class="col-sm-10 ">
              
                <h1 class="text-center">Peliculas</h1>
                <div class="input-group p-2">
                
                </div>
                <div class="input-group p-2">
           
                </div>
                <div class="input-group p-2">
                <button class="w-100 btn btn-lg btn btn-primary" 
                  onClick={signInWithGoogle} >Iniciar sesión con Facebook</button>
                </div>
                <div class="input-group p-2">
                  <button class="w-100 btn btn-lg btn btn-danger" 
                  onClick={signInWithGoogle} >Iniciar sesión con GOOGLE</button>

                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Login;