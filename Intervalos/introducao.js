setTimeout(function(){
    console.log('olá')
}, 5000)


let n = 0

function funcao(){
    n++
    console.log(n)
}
setInterval(funcao, 1000)