let a = 7
let b = 94
let temp = a
a = b
b = temp
console.log(a, b)
const peso1 = 1
const peso2 = 2
const nota1 = 9.0
const nota2 = 10.0
const media = (nota1*peso1 + nota2*peso2)/ (peso1+peso2)
console.log(media.toString())
console.log(media.toFixed(2))

let num = Number(2)
console.log(Number.isInteger(num))// verifica true ou flase

//Função Math
let lado = 4
const areaQuadrado = Math.pow(lado, 2)
console.log(areaQuadrado)