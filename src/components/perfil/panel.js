import { useEffect, useState } from "react";
import Archivos from "./archivos";
import Home from "./Home";
import NuevaPeli from "./NuevaPeli";
export default function Panel(props) {
  const { user } = props;
  

  return (

    <div>
      <Home user={user}></Home>
    </div>


  )
}

