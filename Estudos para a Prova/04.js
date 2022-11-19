// -- Coerção(Conversão) de Tipos
// -- Coerção Explicita ------> Manual <------
const numero = 10
console.log(numero, typeof numero)

const numString = String(numero)
console.log(numString, typeof numString)

console.log(Number('1321'))
console.log(parseFloat('132.12'))
console.log(parseInt('1321.34'))
console.log(Boolean(93933))
console.log(Boolean(0))

console.clear()

// -- Coerção Implicita ------> Automatica <------

console.log(10 + 1)   // -- 11
console.log(10 + '1') // -- 101 ele vai concatenar
console.log(10 - '1')  // -- Js entende a string como numero
console.log(10 * '3')  // -- Js entende a string como numero
console.log(10 - 'x')  // -- NaN - Not a number

let n = 1 + "1"
console.log(n)



    

