// Punto 2
const myArray = [];

for (let num = 1; num <= 50; num++){
    const aleatorio = Math.random() * 10; 
    myArray.push(Math.round(aleatorio)); 
}

console.log("Numeros aleatorios del 1 al 50: ", myArray);


// Punto 3

const newArray = [];
for (let count = 0; count <= 50; count++){
    const num = myArray[count];
    if(num < 4){
        newArray.push(num);
    }
}

console.log("Numeros menores a 4: ", newArray);

// Punto 4

