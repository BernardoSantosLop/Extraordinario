import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { logout } from "../../service/firebase";
import Archivos from "./archivos";
import NuevaPeli from "./NuevaPeli";

export default function Home(props) {
    const { user } = props;
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <div class="container-fluid ">
                        <a class="navbar-brand" >PELICULAS</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/archivos" class="nav-link active" aria-current="page" >Cartelera</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/NuevaPeli" class="nav-link active" aria-current="page" >Agregar Pelicula</Link>
                                </li>
                              <li class="nav-item">
                            
                            </li>
                                 <li    class="nav-item">
                                     <a onClick={logout}  class="nav-link active" href="">Cerrar sesión</a>
                                     </li>
                             
                                      
                             
                              
                                <li class="nav-item">
                                   
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/archivos' element={<Archivos />} />
                    <Route path='/NuevaPeli' element={<NuevaPeli />} />
                    
                </Routes>
            </Router>
        </div>
    )
}
