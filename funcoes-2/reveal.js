const calcReavealPattern = (function(){
    let n = 0

    function checkNumber(_n){
        if(typeof _n !== "number"){
            throw TypeError("Valor não numérico passado.")
        }
    }

    function soma(_n){
        checkNumber(_n)
        n += _n
        return this
    }

    function subtrai(_n){
        checkNumber(_n)
        n -= _n
        return this
    }

    function log(){
        console.log(n)
        return this
    }

    return {
        soma, subtrai, log
    }


})()

calcReavealPattern.soma(5).subtrai(2).log()

try {
    calcReavealPattern.soma(null)
} catch (e) {
    console.log(e.message)
}