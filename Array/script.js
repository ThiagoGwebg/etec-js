let frutas = ["Maçã", "Banana", "Laranja"];

let numeros = new Array(45, 78, 69, 789);
console.log(numeros[3]);
console.log(numeros);

//criando arrays vazio
let alunos = [];
let vazio = [];

let escola = ["Text0", 42, true, null, { "nome": "joao" }, "Nicolas"];
console.log("Mostrando os dados do array escola");
console.log(escola[0]);
console.log(escola[1]);
console.log(escola[2]);
console.log(escola[3]);
console.log(escola[4]);

console.log("contando os itens do array escola")
console.log(escola.length)

let cores = ["Azul", "Verde", "Vermelho"];
console.log(cores.length)

console.log(cores[0])
console.log(cores[1])
console.log(cores[3])

// Objeto em javaScript
const casa = {
    "Endereço": "Rua chico",
    "Cor": "rosa",
    "Numero": 69
}

document.getElementById("h2").style.color = "pink"

let pilha = [1, 2, 3];
pilha.push(4);

console.log(pilha);
pilha.pop();
console.log(pilha);


pilha.unshift(0);
console.log(pilha);
pilha.unshift("joao");
console.log(pilha);

pilha.shift();
console.log(pilha);
console.log("==========================================================");
letras = ["a", "b", "c", "d", "e", "f"];

console.log(letras.slice(1, 4));

//contruindo outro array
parte = letras.slice(2, 4);

console.log("mostrando o array");
console.log(parte);

console.log("Exemplo com splice");
console.log(letras);

parte.splice(2, 1, "x", "y");
console.log(parte);

let array1 = [1, 2];
let array2 = ["a", "b"];
let array3 = array1.concat(array2);
console.log(array3);

frutas = ["maçã", "banana", "melancia", "goiaba", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
};
