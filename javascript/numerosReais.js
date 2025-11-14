// FUP que solicite dois números reais, realize a soma e imprima o resultado

const prompt = require('prompt-sync')(); // importa o módulo para ler do terminal

const num = parseFloat(prompt("Digite o primeiro número:"));
const num1 = parseFloat(prompt("Digite o segundo número:"));

const soma = num + num1;

console.log("A soma é: " + soma);


