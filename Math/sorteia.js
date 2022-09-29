function getRandomNumber(inicio = 0, fim = 10, inteiro = true) {
    // let newNumber = 0
    // while(newNumber < inicio) {
    //     newNumber = (Math.random() * fim) 
    // }
    let newNumber = Math.random() * (fim - inicio) + inicio

    if(inteiro){
        newNumber = Math.round(newNumber)
    } else {
        newNumber = newNumber.toFixed(3)
    }

    return newNumber
}
let arr = []
for(i = 0; i < 20; i++) {
    arr.push(getRandomNumber(20, 30, false))
}
console.log (arr)