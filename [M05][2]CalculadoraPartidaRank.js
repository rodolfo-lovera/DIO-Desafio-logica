let vitorias = 110
let derrotas = 5

saldo = saldoVitorias(vitorias,derrotas)
nivel = calcNivel(saldo)

console.log("O Herói tem de saldo de " + saldo + " e está no nível de " + nivel + ".")

function saldoVitorias(numA,numB){
    return numA - numB
}

function calcNivel(numA){
    situacaoJogador = "Frangote iniciante"
    
    if(numA !== 0 && numA <= 10){
        situacaoJogador = "Ferro"
    } else if(numA > 10 && numA <= 20){
        situacaoJogador = "Bronze"
    } else if(numA > 20 && numA <= 50){
        situacaoJogador = "Prata"
    } else if(numA > 50 && numA <= 80){
        situacaoJogador = "Ouro"
    } else if(numA > 80 && numA <= 90){
        situacaoJogador = "Diamente"
    } else if(numA > 90 && numA <= 100){
        situacaoJogador = "Lendário"
    } else{
        situacaoJogador = "Bolsonaro"
    } return situacaoJogador
}