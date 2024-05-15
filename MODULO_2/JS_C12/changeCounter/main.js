const counterElement = document.getElementById("counter");

let count = 0
const incrementar = () => {
    count = count + 1;
    counterElement.innerHTML = count;
}

// Primer click = count => 1
// Segundo click count =>  2
// Tercer click count => 3 

const decrementar = () => {
    if(count > 0){
        count = count - 1
        counterElement.innerHTML = count;
    }
}