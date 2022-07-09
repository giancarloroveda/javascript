
let n = "global"


function mostraN() {
    let n1 = "n1 local"
    console.log("valor de n1:" + n)

    if(true){
        let n1 = "n1 dentro de if com let"
    }
    console.log(n1)
}

console.log(n)

mostraN()

console.log("valor de n no escopo global:" + n)