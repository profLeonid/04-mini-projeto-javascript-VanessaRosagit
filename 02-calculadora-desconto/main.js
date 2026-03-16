'use strict'

function calcularDesconto() {

    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById("resultado")

    const valorDesconto = preco * desconto / 100
    const valorPago = preco - valorDesconto

    // mostrar resultado
    resultado.textContent =
        "Desconto: R$ " + valorDesconto.toFixed(2) +
        " | Valor final: R$ " + valorPago.toFixed(2)

    // cores
    resultado.classList.remove("verde","amarelo","vermelho")

    if (desconto <= 5) {
        resultado.classList.add("verde")
    }

    else if (desconto <= 10) {
        resultado.classList.add("amarelo")
    }

    else {
        resultado.classList.add("vermelho")
    }
}