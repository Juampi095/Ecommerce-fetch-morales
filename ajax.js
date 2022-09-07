//GETJSONLOCAL
function obtenerJsonLocal() {
    const URLJSON = "autos.json";
    fetch(URLJSON)
        .then(respuesta => respuesta.json())
        .then(autos => console.log(autos))
}

obtenerJsonLocal();


