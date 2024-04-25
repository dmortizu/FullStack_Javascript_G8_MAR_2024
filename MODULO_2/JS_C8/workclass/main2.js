// Vamos a calcular el IMC
// imc = peso / (altura * altura)



function calcImc (peso, altura){
    const result = peso / (altura * altura);
    return result;
}

// Las variables dentro de una funcion solo existen dentro de ellas;
// no se puede usar afuera de ella 

// Lo que se coloque despues del return no se ejecuta

const imc = calcImc(50, 20);
console.log("IMC", imc)

if (imc <= 10){
    console.log("El IMC es menor a 10")
} else {
    console.log("El imc es mayor a 10")
}




