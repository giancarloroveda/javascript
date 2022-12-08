const romanToInt = function(s) {
    const valoresRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    const valoresRomanosQuebrados = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    const valoresIndArab = [1, 5, 10, 50, 100, 500, 1000, 4, 9, 40, 90, 400, 900]
    let arrayString = s.split('')

    let arrayBonito = arrayString.map(function(el, i){
        
        
        if((el + arrayString[i + 1] === 'IV') || (el + arrayString[i + 1] === 'IX') || (el + arrayString[i + 1] === 'XL') || (el + arrayString[i + 1] === 'XC') || (el + arrayString[i + 1] === 'CD') || (el + arrayString[i + 1] === 'CM')){
            return el + arrayString[i + 1]
        } else if((el === 'I') || (el === 'V') || (el === 'X') || (el === 'L') || (el === 'C') || (el === 'D') || (el === 'M')) {
            return el
        }
    })

    

    let arrayFinal = [arrayBonito[0]]

    
    arrayBonito.forEach(function(el, i){
        if(i > 0){
            
            if(arrayBonito[i - 1].length === 2){
                return
            } else {
                arrayFinal.push(el)
            }
        }
    })

    


    

    let arrayNumeros = arrayFinal.map(function(el, i){
        return valoresIndArab[valoresRomanos.indexOf(el)]
    })
    
    arrayNumeros.forEach(function(el, i){
        if(i > 0){
            if(arrayNumeros[i] > arrayNumeros[i - 1]){
                throw new Error('Aprende número romano ai burro!')
            }
        }
    })
    
    return arrayNumeros.reduce(function(prev, current){
        return prev + current
    })
};



try {
    console.log(romanToInt('MCCLIV'))
} catch (e) {
    console.log(e.message)
}

