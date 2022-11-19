// -- Questão 1.
// -- Faça um programa que peça a temperatura em graus Fahrenheit (°F),
// -- transforme e mostre a temperatura em graus Celsius (°C).

let tempF = prompt("Digite a temperatura em Farenheit <F°>: ")
console.log("Resultado da Questão é, "((5 *(tempF - 32))/9))

// -- Questão 2.
// -- Faça um programa que leia as coordenadas de 2 (dois) pontos em um
// -- plano cartesiano 2D: a coordenada x do primeiro ponto (x_1), 
// -- a coordenada y do primeiro ponto
// -- (y_1), a coordenada x do segundo ponto (x_2) e a coordenada y 
// -- do segundo ponto (y_2). Em
// -- seguida, calcule a distância euclidiana entre os pontos, 
// -- utilizando a equação abaixo:

// -- Para exemplificar, se o usuário informar os valores 
// -- 1, 7, 5 e 9 para as coordenadas dos pontos,
// -- respectivamente, o resultado deve ser 4.4721.

let x1 = 7
let x2 = 1
let y1 = 9
let y2 = 5
console.log("d = ", Math.sqrt(((x2-x1) ** 2) + ((y2 - y1) **2)))


