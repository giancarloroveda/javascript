(function(){

    let imc = ""
    let classific = ""

    function calcularIMC(n1, n2){
          imc = n1 / n2 ** 2

        return imc
    }
    calcularIMC(78, 1.78)
    console.log(`O seu IMC é ${imc}!`)   

    function classificarIMC(n){

        console.log(n)

        switch(n){
            case n > 16 && n < 16.9:
                classific = "muito abaixo do peso"
                break
            case n > 17 && n < 18.4:
                classific = "abaixo do peso"
                break
            case n > 18.5 && n < 24.9:
                classific = "peso normal"
                break
            case n > 25 && n < 29.9:
                classific = "acima do peso"
                break
            case n > 30 && n < 34,9:
                classific = "obesidade grau I"
                break
            case n > 35 && n < 40:
                classific = "obesidade grau II"
                break
            case n > 40:
                classific = "obesidade grau III"
            }
    
                
        } 
        classificarIMC(imc)
        console.log(`A sua classificação é ${classific}!`)
        
        
    })()
                
        
        
