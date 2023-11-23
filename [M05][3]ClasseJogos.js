class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque = "nada"
        if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        } else {
            console.log("O tipo informado esta errado ou não existe.")
        }

        if (ataque !== "nada") {
            console.log(`O ${this.tipo} atacou usando ${ataque}.`)
        }        
    }
}

let personagem1 = new heroi("Rodolfinn", 39, "guerreiro")
let personagem2 = new heroi("Rodolfinn", 39, "mago")
let personagem3 = new heroi("Rodolfinn", 39, "monge")
let personagem4 = new heroi("Rodolfinn", 39, "ninja")
let personagem5 = new heroi("Rodolfinn", 39, "ninjaa")

personagem1.atacar()
personagem2.atacar()
personagem3.atacar()
personagem4.atacar()
personagem5.atacar()
