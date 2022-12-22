import moduloDefault, { myMod1b, obj, texto, nome, idade} from "./modules/mod1.js"


console.log('app rodando')

const myMod = moduloDefault.myMod1()

console.log(myMod, myMod1b(), obj, texto, moduloDefault.arr, nome, idade)