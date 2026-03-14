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
        mostraResultado("Por favor, informe numeros validos", "perigo");
        return;
    }

    //calculo do imc
    const imc = peso / (altura * altura);

    //formata o resultado para 2 casas decimais
    const imcFormatado = imc.toFixed(2);

    //classifica o imc
    let classificacao = '';
    let classeCss = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do Peso';
        classeCss = 'alerta';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'peso normal';
        classeCss = 'normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'sobrepeso';
        classeCss = 'alerta';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
        classeCss = 'perigo'
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2'
        classeCss = 'perigo'
    } else {
        classificacao = 'obesidade grau 3'
        classeCss = 'perigo'
    }

    //mensagem final
    const mensagem = `Seu IMC é ${imcFormatado} (${classificacao}).`;
    mostraResultado(mensagem, classeCss);

});

function mostraResultado(mensagem, classeCss) {
    divResultado.textContent = mensagem;

    //remove classes anteriores de css adicionadas
    divResultado.className = '';
    divResultado.classList.add(classeCss)

    //remove a classe que esconde a div
    divResultado.classList.remove('escondido')
}
