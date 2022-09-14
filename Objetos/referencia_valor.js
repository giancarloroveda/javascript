let x = 10

function mudaX(n) {
    n++
    console.log("x interno", n)
}

mudaX(x)

console.log("x externo", x)

let obj = {
    nome: "Mariana"
}

function mudaObj(obj){
    obj['idade'] = 20
    console.log(obj)
}

mudaObj(obj)

console.log(obj)