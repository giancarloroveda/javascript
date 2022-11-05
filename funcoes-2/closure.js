const teste = (function(n){
    
    return function(){
        console.log('função de retorno chamado ' + ++n)
        return 'retorno da função de retorno ' + n
    }
})(0)

const str = teste()
console.log(str)
teste()
teste()
teste()
const str2 = teste()
console.log(str2)
teste()
