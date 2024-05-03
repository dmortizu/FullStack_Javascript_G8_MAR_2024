const product = {
    name: "celular",
    color: ["negro", "blanco", "gris", "morado"],
    marca: "iphone",
    cantidadStock: 100,
    precio: 500000,
    descuento: 10, // 10%
    disponibleEntregaInmediata: true,
}


// console.log("¿Cual es la marca del producto?", product.marca)

// Reto, si el producto esta disponible para entrega inmediata,
// vamos a imprimir en nuestra consola "lo recibiras hoy", por lo contrario
// vamos a imprimir "Lo recibiras en unos días"

if (product.disponibleEntregaInmediata === true){
    console.log("El producto lo recibiras hoy");
} else{
    console.log("Lo recibiras en unos días");
}