

function soma(n1, n2) {
    if ((n1 + n2) < 10) {
        throw console.log("O resultado foi menor do que 10")
    }
    return console.log(n1 + n2)
}
    
try {
    soma(3, 4)
} catch (msg) {
    msg
}

    
