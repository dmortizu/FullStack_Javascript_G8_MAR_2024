let shoppingList = [];

for (let counter = 1; counter <= 5; counter++){
    const element = prompt("Ingresa algo a la lista de compras");
    shoppingList.push(element);
}

console.log('lista de compras', shoppingList);

const cantidadElementosEnLista = shoppingList.length;
for (let element2 = 0; element < cantidadElementosEnLista; element++ ){
    document.write("<li>", shoppingList[element2], "</li>");
}

