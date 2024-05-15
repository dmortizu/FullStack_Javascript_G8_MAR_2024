// Tipos de Datos

//1. string = "Kambcode" || 'kambcode'
//2. Numerico = 100
//3. Boleanos = True || False
//4. Funciones = 
//5. Arrays


function sayHello (name){ 
    console.log("hola", name)
}
// sayHello("Daniel");
// sayHello("Carlos");
// sayHello("Julieth");

// Arrow function = funciones flecha

const sayHello = (name) => {
    console.log("hola", name)
}

sayHello("Daniel");
sayHello("Carlos");
sayHello("Julieth");


// otro ejemplo

// const nombre = (parametros) => {}

const isAdult = (age) => {
    const result = age > 18
    console.log("¿Es adulto?", result)
    return result
}

isAdult(28)

// Reto
// Crear una funcion que calcule el valor de un producto
// Valorproducto + envio

const valor = (valorProducto, envio) => {
    const valorTotal = valorProducto + envio;
    console.log("El valor total es: ", valorTotal)
    return valorTotal;
}

const valorTotal2 = valor(50000, 10000); // 60.000

// con un if me diga si el producto es costoso o no,
// es costosos cuando vale más de 100.000

if(valorTotal2 > 100000){
    console.log("El producto es costoso")
} else {
    console.log("El producto es economico")
}

