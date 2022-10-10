function teste(){
    console.log("function expression teste")
    return 'fn expression'
}

const t1 = teste()
console.log(t1)


const testeArrow = () => { //arrow function nao tem hoisting
    console.log("arrowFunction testeArrow")
    return 'arrow fn'
}

const t2 = testeArrow()
console.log(t2)

const testeArrow2 = str => 'hello ' + str

const t3 = testeArrow2('world')
console.log(t3)

