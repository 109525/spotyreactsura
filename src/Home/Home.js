import './Home.css'
 
import {SubMenu} from '../SubMenu/SubMenu.js'
import {Footer} from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="Rata Blanca es una banda de Heavy Metal argentina formada en 1985 en la zona del Bajo Flores, barrio ubicado al sur de la ciudad de Buenos Aires. Se la considera como una de las más importantes e influyentes del hard rock y heavy metal en español,​ aunque durante su carrera también han incorporado pesados riffs con estructuras melódicas y armónicas de la música clásica.​ Con los años han sido clasificados en distintos subgéneros, sin embargo la banda se considera simplemente rock metálico"

    return(
        <>
        <div className='banner'>

        </div>
    
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">RATA BLANCA</h1>
                        <p className='text-center'>{descripcionBanda}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <SubMenu></SubMenu>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    )

}