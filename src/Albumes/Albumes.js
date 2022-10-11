import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes (){

    //declanrando mi primer UseState
    const[canciones,setCanciones]=useState(null)

    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)

})
console.log(canciones)


    return(

        <>
            <h1>Hola soy albumes y soy un componente</h1>
        </>
    )
}