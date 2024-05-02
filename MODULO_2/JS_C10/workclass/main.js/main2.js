// Objetos
// Un objeto es un conjunto de datos mixtos

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

console.log("¿Cual es el color del perro?", dog1)