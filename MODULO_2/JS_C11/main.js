// Objetos
// Un objeto es un conjunto de datos mixtos, es una entidad independiente
// con propiedades y tipos

const dog1 = {
    name: "Filurais",
    age: 5,
    color: ["Negro", "Gris", "Cafe"],
    raza: "Labrador",
    precio: 200000,
    estaDisponible: true,
    cantidad: 20,
    saludar: () => {
        console.log("Mi perro saluda")
    }
}

//console.log("¿Muestrame todo el objeto dog1?", dog1)
console.log("¿Cual es el color del perro?", dog1.color);
console.log("¿Tienes en color gris?", dog1.color.includes("blanco"));