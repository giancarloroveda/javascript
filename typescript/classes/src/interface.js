"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(classe) {
        this.classe = classe;
    }
    mostrarCategoria() {
        console.log(`A classe é: ${this.classe}`);
    }
}
exports.Animal = Animal;
class Gato extends Animal {
    constructor(nome, idade) {
        super("mammalia");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrar detalhes chamado");
    }
}
const laica = {
    categoria: "mammalia",
    mostrarDetalhes() {
        console.log("stringaaaa");
    }
};
console.log(laica);
class Cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("mostrarDetalhes de Cachorro");
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : '');
    }
    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}
const mingal = new Gato("Mingal", 6);
console.log(mingal);
const toto = new Cachorro("mammalia", "Toto", 10);
console.log(toto);
toto.latir();
