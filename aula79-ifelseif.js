function entre (valor, inicio, fim) {
    return valor >= inicio && valor <= fim
}

function imprimirResultado (nota)  {
    if (entre(nota, 9, 10)) {
        console.log('Quadro de Honra')
    } else if (entre (nota, 7, 8.99)) {
        console.log ('Aprovado')
    } else if (entre (nota, 4, 6)) {
        console.log ('Recuperacao')
    }
    console.log('Fim')
}
 
imprimirResultado(10)

var n = 3;

if (n == 1) {
    // Executa o bloco de código #1
    }
    else if (n == 2) {
    // Executa o bloco de código #2
    }
    else if (n == 3) {
    // Executa o bloco de código #3
    }
    else {
    // Se tudo falhar, executa o bloco #4
    }
    