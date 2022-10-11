export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/632M26jlmnCrL8CqD5i7Kd/top-tracks?market=US"

    const TOKEN="Bearer BQD2fpkQfpt-g7D9fJ6I45jv2zxmKh6QHJi2KBHu1UBKJb2ouoxHY7RMqN09c3aCxZSQdAzeaWSw0cA0of-vZxxSal9RWjEqmUQTs6RolQnYJc8D46a925lKlWcPEQTX-euGFKpQAP0v4mEUfleNVha2kjJDCI0x5jDkFsldDqlqqJj_tUposCX7MOsPQKeb0eM"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos

}