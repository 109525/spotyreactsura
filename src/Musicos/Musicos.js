export function Musicos(){

    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {nombre:"rata blanca",rol:"Vocal",url:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2FAdrian%20barilari.png?alt=media&token=aea422d2-0b47-49e1-9f80-85359e13c7fa"},
        {nombre:"rata blanca",rol:"Guitarrista",url:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2FGiardino.jpg.crdownload?alt=media&token=c593dc31-07f2-43da-a865-0bedbea4d6dc"},
        {nombre:"rata blanca",rol:"Bajista",url:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fguillermo.jpg?alt=media&token=43060648-3b99-4e89-9844-60dd11d3c0fc"},
        {nombre:"rata blanca",rol:"Baterista",url:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fscarcela.jpg?alt=media&token=2e708cb2-18df-480f-99d1-272358c2f907"},
    ]

    let conciertosMemorables=[
        {fecha:"1993", pais:"Europa", descripcion:" Esta es la gira más grande que haya realizado una banda hispanoamericana por Europa,[cita requerida] quedando registrada en el DVD Gira por Europa.", foto:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fbanda1.webp?alt=media&token=f317ebcc-5181-4baf-9e30-7f5f177b9911"},
        {fecha:"1994", pais:"Colombia", descripcion:"", foto:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fbanda2.jpg?alt=media&token=2e91f87d-acec-47b0-a5ad-a21d70a07df7"},
        {fecha:"1992", pais:"Ecuador", descripcion:"", foto:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fbanda3.jpg?alt=media&token=5e8a3062-5cd0-4aab-8f8a-b6ab5d00e505"},
        {fecha:"1986", pais:"Alemania", descripcion:"", foto:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fbanda3.jpg?alt=media&token=5e8a3062-5cd0-4aab-8f8a-b6ab5d00e505"},
        {fecha:"1984", pais:"Holanda", descripcion:"", foto:"https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/integrantes%2Fbanda4.jpg?alt=media&token=ef2622ce-482a-4746-b594-c85eea3142e6"}
    ]



    //mapeando un arreglo para hacer render
    return(
        <>
        <div className="row row-cols-1 row-cols-md-4 g-3">

            {
                musicos.map(function(musico){
                    return(
                        <>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={musico.url} className="img-fluid w-100 h-100"></img>  
                                    <h1 className="text-center text-secondary">{musico.nombre}</h1>
                                    <h2 className="text-center text-danger">{musico.rol}</h2>                          
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-3">

            {
                conciertosMemorables.map(function(concierto){
                    return(
                        <>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={concierto.foto} className="img-fluid w-100 h-100"></img>  
                                    <h1 className="text-center text-secondary">{concierto.fecha}</h1>
                                    <h2 className="text-center text-danger">{concierto.pais}</h2>                          
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