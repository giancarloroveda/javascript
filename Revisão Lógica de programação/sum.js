function soma(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number" ) {
        throw Error("Você deve digitar apenas numeros")
    }
    return console.log(n1 + n2)
}


    