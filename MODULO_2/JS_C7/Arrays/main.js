// Tipos de Datos

// String
const name = "Daniel";
// Number 
const age = 32;

// Arrays -> Arreglos
// Los arreglos son listas o estructuras de datos que permiten
// almacenar multiples valores del mismo tipo en una variable 


// Ejemplo una variable que tiene una lista de productos
// const shoppingList = ["leche", "pan", "arroz", "manzanas", "peras"];
// console.log("Mi lista de compras tiene los siguientes productos: ", shoppingList);

const years = [2000, 2001, 2023, 2024];
//console.log("Arrglo tipo numerico", years);

const mixedArray = ["kambcode", 32, true, "Daniel", false, 4]
//console.log("Arreglo Mix ", mixedArray);

const arrayVacio = [];

// Utilidades de los Arreglos o Arrays
// 1. como saber cuantos elementos tiene un Arreglo .length
const shoppingList2 = ["leche", "pan", "arroz", "manzanas", "peras"];
//console.log("Mi lista de compras: ", shoppingList2);
//console.log("La cantidad de datos de mi array es: ", shoppingList2.length);

// 2. Para agregar elementos a un array utilizamos la propiedad .push()
const shoppingList3 = ["leche", "pan", "arroz", "manzanas", "peras"];
shoppingList3.push("bananos");
//console.log("Mi Nueva lista de productos es: ", shoppingList3);

// 3. Podemos consultar un elemento en particular del Arreglo
const todoList = ["hacer la tarea", "lavarse los dientes", "dormir"];
//console.log("Cantidad de elementos del todoList: ", todoList.length);
//console.log("El Primer elemento del todoList es: ", todoList[0]);
//console.log("El Segundo elemento del todoList es: ", todoList[1]);
//console.log("El Tercer elemento del todoList es: ", todoList[2]);

// 4. Podemos reemplazar un elemento de un array
todoList[1] = "Lavar la losa";
console.log("el nuevo arreglo es: ", todoList);


// 5. Saber si el arreglo contiene un elemento .includes()

const shoppingList = ["leche", "pan", "arroz", "manzanas", "peras"];
if (shoppingList.includes("azucar")){
    console.log("Tienes azucar en tu lista de compras")
} else {
    console.log("No tienes azucar")
}















