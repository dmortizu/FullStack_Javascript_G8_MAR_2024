const myArray = ["hola", "mundo", "como", "estas", "hoy"] // length
const newArray = []; 

for (let num = myArray.length - 1; num >= 0; num--){
    newArray.push(myArray[num]);
}

console.log("Arreglo Invertido: ", newArray);