//Reto

// 1. Crear un objeto que se llame pelicula
// 2. Tiene las siguientes propiedad
// - nombre
// - año de lanzamiento
// - edad minima = 15
// - Hacer una funcion que se llame disponibleParaUsuario(edadUsuario) => 
// esta debe retornar si puedo ver la pelicula o no (False | True)

const pelicula = {
    nombre: "titanic",
    añoDeLanzamiento: 2002,
    edadMinima: 15,
    disponibleParaUsuario: (edadUsuario) => {
        if(edadUsuario > pelicula.edadMinima){
            console.log("Puedes ingresar")
        } else {
            console.log("No puedes ingresar")
        }
    }
}

pelicula.disponibleParaUsuario(18);
pelicula.disponibleParaUsuario(10);