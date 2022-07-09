(function(){

    let imc = ""
    

    function calcularIMC(n1, n2, cb){
        if(typeof n1 === undefined || typeof n2 === undefined){
            throw Error("Precisa de dois parâmetros: peso e altura")
        }
        if(typeof n1 !== "number" || typeof n2 !== "number"){
            throw Error("Você deve digitar apenas números")
        }
        
        imc = n1 / n2 ** 2
        
        typeof cb === "function" && cb(imc)
        typeof cb === "function" || console.log(`O seu IMC é: ${imc}`)
    }
    calcularIMC(72, 1.78, classificarIMC)
    
      

    function classificarIMC(i){
        if(typeof i === undefined){
            throw Error("O IMC não foi informado")
        }
        if(typeof i !== "number"){
            throw Error("O valor recebido não foi um número")
        }

        if(i < 16){
            return console.log("sem classificação")
        } else if(i < 16.9){
            return console.log("Você é classificado como muito abaixo do peso")
        } else if(i < 18.4){
            return console.log("Você é classificado como abaixo do peso")
        } else if(i < 25){
            return console.log("Você é classificado como peso normal")
        } else if(i < 30){
            return console.log("Você é classificado como acima do peso")
        } else if(i < 35){
            return console.log("Você é classificado como obeso grau I")
        } else if(i < 40){
            return console.log("Você é classificado como obeso grau II")
        } else
            return console.lolg("Você é classificado como obeso III")
    }
    
})()

    
        
        
                
        
        
