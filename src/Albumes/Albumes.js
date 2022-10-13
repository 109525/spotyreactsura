import { servicioSpoty } from "../services/servicioSpoty.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from "react"

export function Albumes (){

    //declanrando mi primer UseState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect

    useEffect(function(){

        servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
        setCarga(false)
    })
    console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{

        return(

            <>
                <div className="row row-cols-1 row-cols-md-4 g-3">

{
    canciones.map(function(cancion){
        return(
            <>
                <div className="col">
                    <div className="card h-100">
                        <img src={cancion.album.images[0].url} className="img-fluid"></img>
                        <audio src={cancion.preview_url} controls></audio>                                
                        <h1 className="text-center text-secondary">{cancion.nombre}</h1>                                                 
                    </div>
                </div>
            </>
        )
    })
}
</div>
            </>
        )

    }
}