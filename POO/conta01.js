// DESAFIO CONTA BANCÁRIA
/* 
1. criar conta abstrata chamada ContaBancaria   

- cliente   

- numero   

- saldo   

- depositar(valor)   

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




