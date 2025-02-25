class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos de idade`)
}

const alex = new Pessoa("Alexandre" , 17)

alex.apresentar()