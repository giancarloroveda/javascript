export abstract class Animal {
    constructor(protected readonly classe: string) {}

    mostrarCategoria(): void {
        console.log(`A classe é: ${this.classe}`)
    }

    abstract mostrarDetalhes(): void

    abstract idade: number
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number
}

class Gato extends Animal {
    constructor(public nome: string, public idade: number) {
        super("mammalia")
    }

    mostrarDetalhes() {
        console.log("mostrar detalhes chamado")
    }
}

const laica: AnimalInterface = {
    categoria: "mammalia",
    mostrarDetalhes(){
        console.log("stringaaaa")
    }
}

console.log(laica)

interface CachorroInterface {
    latir(): void
}

class Cachorro implements AnimalInterface, CachorroInterface {
    constructor(public categoria: string, public readonly nome: string, public idade?: number) {

    }
    
    mostrarDetalhes(): void {
        console.log("mostrarDetalhes de Cachorro")
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1: '')
    }

    latir(){
        console.log(`${this.nome} está latindo!`)
    }
}

const mingal = new Gato("Mingal", 6)
console.log(mingal)

const toto = new Cachorro("mammalia", "Toto", 10)
console.log(toto)
toto.latir()

mingal.mostrarCategoria()
