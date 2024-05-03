const product = {
    name: "celular",
    color: ["negro", "blanco", "gris", "morado"],
    marca: "iphone",
    cantidadStock: 100,
    precio: 500000,
    descuento: 10, // 10%
    disponibleEntregaInmediata: true,
}

// Operaciones con los objetos

// 1. Puedo sobreescribir una propiedad
product.marca = "Samsung";
product.color[1] = "Cafe";

// 2. Puedo agregar una propiedad
product.sePuedeFinanciar = false;

// 3. Puedo quitar una propiedad
delete product.descuento;

console.log("Este es el objeto", product);