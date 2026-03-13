const form = document.getElementById("imc-form");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const divResultado = document.getElementById("resultado");

form.addEventListener("submit", function (evento) {
    //esse comando evita que o formulario seja atualizado
    evento.preventDefault();

    //pega os valores digitados no input
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    //validar se é realmente numero
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {

    }


});