// DESAFIO CONTA BANCÁRIA
/* 
2. Criar duas classes que herdam de ContaBancaria

- ContaCorrente

    - limite

    - sacar(valor)

  - ContaPoupanca

    - aniversario

    - sacar(valor) 
*/

class ContaBancaria{
    constructor(cliente, numero){
        if(this.constructor === ContaBancaria) {
            throw new Error("ContaBancaria é uma classe abstrata.")
        }
        if(!(cliente || numero)){
            throw new Error("Preencha todas as lacunas.")
        }
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }
    
    

    depositar(valor){
        this.saldo += valor
        return this
    }
    
    sacar(){
        throw new Error("Método 'sacar()' precisa ser implementado.")
    }
}

class contaCorrente extends ContaBancaria{
    constructor(limite, cliente, numero){
        super(cliente, numero)
        this.limite = limite
    }

    sacar(valor){
        let disponivel = this.saldo + this.limite
        if(valor > disponivel){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
        return this
    }
}

const contaCor = new contaCorrente(2000, 'Gian', 35)

console.log(contaCor)

class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.aniversario = new Date().toLocaleString()
    }

    sacar(valor){
        if(valor > this.saldo){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
        return this
    }
}

const contaPoup = new ContaPoupanca("Gian", 35)

console.log(contaPoup)


