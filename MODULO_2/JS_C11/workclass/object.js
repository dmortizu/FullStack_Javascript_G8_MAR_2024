const product = {
    name: "celular",
    id: 1234,
    color: ["negro", "verde", "gris", "blanco"],
    marca: "Iphone",
    cantidadStock: 150,
    precio: 2000000,
    descuento: 100000,
    disponibleEntregaInmediata: true,
    obtenerPrecioTotal: () => {
        const precioTotal = product.precio - product.descuento;
        return precioTotal;
    },
    isColorAvailable: (colorSolicitado) => {
        const colorDisponible = product.color.includes(colorSolicitado);
        return colorDisponible
    }
}

const total = product.obtenerPrecioTotal(); // Esta es una manera creando una constante para almacenar el resultado
console.log("El precio total del producto es: ", total)
console.log("El precio total del producto es: ", product.obtenerPrecioTotal()) // Esta es la segunda forma, pero sin guardar el resultado, solamente lo imprimo

const disponibleEnVerde = product.isColorAvailable("verde");
console.log("¿Esta en color verde?", disponibleEnVerde);

console.log("¿Esta en color morado?", product.isColorAvailable("morado"));

