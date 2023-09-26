//armazenando uma função numa variável
const imprimirSoma = function (a, b) {console.log(a + b)}
imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável

const soma = (a, b) => {return a + b}
console.log(soma(5, 5))

const imprimir = a => console.log(a)
imprimir('Vai Corinthians!')