// -- Array 

// - const nome = "Diego"
// - const idade = 37

// - let array = ["Diego", 37]
// - console.log(array)
// - console.log("O Elemento 01 é: ", array[1])
// - console.log(array.length)

/*let array = ["Diego", 37]
for (let i = 0; i < 2; i++) {
    console.log(array[i])
}*/

let array = ["Diego", 37, 1.80, "Bahia"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for (let elemento of array) {
    console.log(elemento)
}

for (let indice in array){
    console.log(indice, array[indice])
}

