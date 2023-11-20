//Desafio Classificador de Nível de Herói

let nomeJogador = "Rodolfinn"
console.log("O nome informado é " + nomeJogador)

let expJogador = 1100500
let nivelJogador = "Não definido"

if (expJogador < 1001){
    nivelJogador = "Ferro"
} else if((expJogador > 1000)&&(expJogador < 2001)){
    nivelJogador = "Bronze"
} else if((expJogador > 2000)&&(expJogador < 5001)){
    nivelJogador = "Prata"
} else if((expJogador > 5000)&&(expJogador < 7001)){
    nivelJogador = "Ouro"
} else if((expJogador > 7000)&&(expJogador < 8001)){
    nivelJogador = "Platina"
} else if((expJogador > 8000)&&(expJogador < 9001)){
    nivelJogador = "Ascendente"
} else if((expJogador > 9000)&&(expJogador < 10001)){
    nivelJogador = "Imortal"
} else{
    nivelJogador = "Bolsominion"
}
console.log("O herói "+ nomeJogador + " está no nível " + nivelJogador + ".")