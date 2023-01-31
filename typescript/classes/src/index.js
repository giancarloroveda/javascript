"use strict";
console.log("---------------");
// mais longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }
//  mais curta
class Animal {
    constructor(nome, classe, habitat, numPatas) {
        this.nome = nome;
        this.classe = classe;
        this.habitat = habitat;
        this.numPatas = numPatas;
    }
    mostrarHabitat() {
        console.log(this.habitat);
    }
}
class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "mamífero", "terrestre", 4);
        this.familia = "felino";
        this.cor = cor;
    }
    mostrarDados() {
        console.log(this.nome);
        console.log(this.classe);
        console.log(this.familia);
        console.log(this.cor);
        console.log(this.numPatas);
    }
}
class Cachorro extends Animal {
    constructor(nome, _cor) {
        super(nome, "mamífero", "terrestre", 4);
        this._cor = _cor;
        this.familia = "canídeo";
    }
    get cor() {
        console.log("get chamado");
        return this._cor;
    }
    set cor(novaCor) {
        console.log("set chamado");
        this._cor = novaCor;
    }
    mostrarDados() {
        console.log(this.nome);
        console.log(this.classe);
        console.log(this.familia);
        console.log(this._cor);
        console.log(this.numPatas);
    }
}
// propriedade private não pode ser acessada nem de fora da classe e nem por uma classe herdada. Já a protected, permite que a classe herdada acesse a propriedade.
// const animal = new Animal("Thor", "mamífero", "terrestre", 4)
// console.log(animal)
// console.log(animal.nome)
// animal.nome = "Petuxo"
// console.log(animal.nome)
// console.log(animal.classe)
// animal.mostrarHabitat()
const mingal = new Gato("Mingal", "branco");
// mingal.mostrarDados()
// mingal.mostrarHabitat()
const toto = new Cachorro("Toto", "marrom");
// toto.mostrarDados()
// toto.mostrarHabitat()
// console.log(toto.cor)
// toto.cor = "preto"
// console.log(toto.cor)
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListAnimais.length = 0;
        this._tempListAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._tempListAnimais];
    }
}
const gian = new Cliente();
gian.adicionarAnimais(mingal, toto);
gian.adicionarAnimais(new Cachorro("Petuxo", "preto"));
const listaAnimais = gian.listaAnimais;
listaAnimais.pop();
console.log(listaAnimais);
console.log(gian.listaAnimais);
console.log(gian);
