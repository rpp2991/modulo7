// Seleciona os campos
var campoA = document.querySelector("input[name='campoA']");
var campoB = document.querySelector("input[name='campoB']");

// Cria uma função para validar o formulário
function validarFormulario(event) {

    event.preventDefault();

    // Verifica se o número B é maior que o número A
    if (parseInt(campoB.value) > parseInt(campoA.value)) {

        // Exibe uma mensagem positiva
        alert("Formulário válido! O Valor do campo B é maior que o valor do campo A");

    }

    else {

        // Exibe uma mensagem negativa
        alert("Formulário inválido, o número B precisa ser maior que o número A. Tente novamente");
    }
}

// Adiciona um event listener ao formulário
document.querySelector(".formularioValores").addEventListener("submit", validarFormulario);