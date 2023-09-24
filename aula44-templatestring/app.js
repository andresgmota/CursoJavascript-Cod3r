const nome = 'Andre'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`
console.log(template)
console.log(`1 + 1 = ${1 + 1}`)
const texto = 'Colocando em maiúsculas' 
const textoEmMaiusculas = texto.toUpperCase()
console.log(textoEmMaiusculas)
const up = texto => texto.toUpperCase()
console.log(`Ei...  ${up('cuidado')}!`)