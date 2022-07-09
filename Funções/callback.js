 /* uma função que serve de parâmetro para outra função */
 
 
 const teste = function (cb){
    console.log("função teste")
    cb("parâmetro da função callback")
}


const fn = function (p){
    console.log("função callback")
    console.log(p)
}
teste(fn)
