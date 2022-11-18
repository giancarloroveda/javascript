// DESAFIO CONTA BANCÁRIA
/* 
5. Polimorfismo
    criar uma classe especializada em transferir.
    Essa classe terá um único método executar(ContaOrigem, ContaDestino, valor).
    Tanto contaOrigem quanto conDestino precisam ser instancias de ContaBancaria.
    Tanto CC quanto CP tem o metodo sacar(), que tem implementações diferentes.
    Mas como sabemos que contaOrigem e contaDestino possuem o metodo sacar, 
    independente se for CC ou CP podemos chamar esse método.
*/

class Transferir{
    static executar(contaOrigem, contaDestino, valor){
        if(!(contaOrigem instanceof ContaBancaria && contaDestino instanceof ContaBancaria)) {
            throw new Error("As contas não são instâncias de ContaBancaria")
        }
        
        try {
            contaOrigem.sacar(parseFloat(valor)) 
            contaDestino.depositar(parseFloat(valor))
        } catch (e) {
            console.log("deu ruim", e.message)
        }
        
    }
}

class Cliente{
    constructor(nome, documento, tipoDocumento){
        if(this.constructor === Cliente){
            throw new Error("Cliente é uma classe abstrata.")
        }
        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }

    
}

class PessoaFisica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CPF")
    }

    
}

class PessoaJuridica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CNPJ")
    }
}

const pf1 = new PessoaFisica("Gian", "cpf")
const pj1 = new PessoaJuridica("GianEmpresa", "cnpj")
console.log(pf1)
console.log(pj1)

// const cliente1 = new Cliente("Gian", '081.311.098-77')

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
    
    get dadosCliente(){
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
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

const contaCor = new contaCorrente(2000, pf1, 1)

console.log(contaCor.dadosCliente)

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

const contaPoup = new ContaPoupanca(pj1, 2)

console.log(contaPoup)
console.log(contaCor)




