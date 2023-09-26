let valor //não inicializada (undefined)
console.log(valor)

valor = null //ausência de valor (null)
console.log(valor)

const produto = {}
console.log(produto)//objeto vazio (undefined)
console.log(produto.preco)

produto.preco = 30.5 
console.log(produto)

produto.preco = null // para objeto sem preço