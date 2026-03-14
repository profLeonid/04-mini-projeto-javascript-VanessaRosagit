'use strict'

function removeClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
}



function avaliar() {
    const tempo = document.getElementById('numero')
    const resultado = document.getElementById('resultado')

    if
        (tempo.value <= 14) {
        resultado.textContent = "Apto"
        removeClasses()
        resultado.classList.add("apto")
    }
    else {
        resultado.textContent = "Não apto"
        removeClasses()
        resultado.classList.add("nao-apto")
    }

}