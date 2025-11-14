//Entrada - Variaveis
//Media aritmetica de 3 notas, e menor 3 horrive
// menor que 7 da pra miora, maior 7 gênio

const nota1 = prompt("Digite a 1ª nota: ")
const nota2 = Number(prompt("Digite a 2ª nota: "))
const nota3 = Number(prompt("Digite a 3ª nota: "))

//processamento
const soma = Number(nota1) + nota2 + nota3
const media = soma / 3

//media menor que 3 
//media menor que 7
//media maior que 7

if(media < 3){
    alert("Sua média é:  " + media + " horrivel melhore!!!!!!!!!!!!")
} else if (media < 7){
    alert("Sua média é:  " + media + " precisa melhorar!!!!!!!!!!!!!!")
} else { (media < 3)
    alert("Sua média é:  " + media + " Gênio!!!!!!!!!!!!!!!!!")
}

