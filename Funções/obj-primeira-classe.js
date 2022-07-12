/* Funções são também objetos de primeira classe. Por isso podem servir de 
parâmetro para outras funções, podem ser propriedades de objetos,
uma função pode retornar outra função E propriedades podem ser atribuidas
à funções, assim como a objetos comuns*/
//_____________________

function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}

fn(function(){
    console.log("função passada por parâmetro")
}
)
//_____________________

function propriedadeObj(){
    console.log("propriedade do objeto")
}
const obj = {
    propriedadeObj
}
obj.propriedadeObj()
//_____________________

function fn2(n1) {
    console.log(n1)
    return function (n2) {
        return n1 * n2
    }
}

const funcao2 = fn2(10)
console.log(funcao2(2))

function fn3(){
    fn3.count++
    return function _fn3(){
        console.log("função retornada por outra função")
    }
}
fn3.count = 0

const funcao3 = fn3()
funcao3()
fn3()
fn3()
console.log(funcao3.name)
console.log(fn3.name)
console.log(fn3.count)
