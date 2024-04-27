// Reto
// Realizar una tabla de multiplicacion del numero 3 (3*1... 3*2.........3*10)

// Realizar todas las tablas de multiplicar (1 al 20)

const digita = Number(prompt("Digita hasta el numero que quieres en tu tabla"))

for(let num1 = 1; num1 <= digita; num1++){ // for grande
    document.write("Tabla del: ", num1, "<br>");
    for (let num2 = 1; num2 <= 10; num2++){ // for pequeño
        tableResult = num1 * num2;
        document.write("la multiplicacion de", num1, "*", num2, "es: ", tableResult, "<br>");
    }
}



// let num = 1
// while(num <= 10){
//     tableResult = 3 * num;
//     console.log("la multiplicacion de 3* ", num, "es: ", tableResult);
//     num++
// }
let num1 = 1
while(num1 <= digita){ // for grande
    document.write("Tabla del: ", num1, "<br>");
    let num2 = 1
    while (num2 <= 10){ // for pequeño
        tableResult = num1 * num2;
        document.write("la multiplicacion de", num1, "*", num2, "es: ", tableResult, "<br>");
        num2++
    }
    num1++
}