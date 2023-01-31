class Pessoa<T>{
    constructor(private nome: T) { }

    setNome(nome: T) {
        this.nome = nome
    }
}

const gian = new Pessoa("Gian")
gian.setNome("Giancarlo")

class List<T>{
    private list: T[] = []

    addToList(element: T): this {
        this.list.push(element)
        return this
    }

    getFromList(index: number): T | null {
        const len = this.list.length
        if (len === 0) return null
        if (index > (len - 1) || index < 0) return null
        return this.list[index]
    }

    removeFromList(index: number): T | null {
        const element = this.getFromList(index)
        if (element !== null) {
            this.list.splice(index, 1)
            return element
        }
        return null
    }
}

class Animal<T>{
    constructor(private nome: T) { }

    setNome(nome: T): void {
        this.nome = nome
    }
}

const listPessoas = new List<Pessoa<string>>()
listPessoas
    .addToList(gian)
    .addToList(new Pessoa("Maria"))
    .addToList(new Pessoa("João"))
// .addToList(new Animal("Toto"))

console.log(listPessoas.getFromList(0))
console.log(listPessoas.removeFromList(1))
console.log(listPessoas)

const listAnimais = new List<Animal<string>>()
listAnimais
    .addToList(new Animal("Toto"))
    .addToList(new Animal("Thor"))
    .addToList(new Animal("Petuxo"))
// .addToList(new Pessoa("Jorge"))

console.log(listAnimais)