const valores = [7.7, 8.9, 8.2, 9.2]
console.log(valores[0], valores[3])
valores[4] = 10
console.log(valores)
console.log(valores.length)// length diz quantos elementos tem no array
valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores [0]
console.log(valores)
console.log(typeof valores)