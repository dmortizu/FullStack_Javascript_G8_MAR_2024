const regularPayment = Number(prompt("Escribe el valor de la cuota"));
const Totalmonth = Number(prompt("Escribe la cantidad de meses del credito"));
// for (INICIO; CONDICION; INCREMENTO)
// month++ es igual a month = month + 1


let payment = 0;

for (let month = 1; month <= Totalmonth; month++){
    payment = payment + regularPayment
    document.write("Mes ",month," cuota $ ", regularPayment, " Total abonado ", payment, "<br>" );
}

document.write("<br>El pago total fue ", payment);

let payment2 = regularPayment - 20;
if(Totalmonth < 12){
    document.write("<br>El descuento que vas a tener es: ", payment)
}

document.write("<br> El pago total fue: ", payment);


// Vamos a crear una aplicacion para mostrar la tabla del 3 
// for (var i = 1; i <= 10; i++){
//     for (var number = 1; number <= 10; number++){
//         const tableResult = number * i;
//         document.write("El resultado de ", i, " * ", number , " es: ", tableResult, "<br>"); 
//     }
// }


// for (var i = 1; i <= 10; i++){
//     var number = 1
//     while (number <= 10){
//         const tableResult = number * i;
//         document.write("El resultado de ", i, " X ", number , " es: ", tableResult, "<br>");
//         number++
//     }
// }

//Vamor a crear una aplicacion para mostrar las tablas de 
//multiplicar del 1 al 10



