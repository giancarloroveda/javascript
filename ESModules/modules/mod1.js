import {MyMod2} from './mod2.js'

function myMod1(){
    console.log('função myMod1 rodando')
    return 'retorno myMod1'
}

const arr = [1, 2, 3, 4, 5]

export function myMod1b(){
    console.log('função myMod1b rodando exportada nomeada')
    return 'retorno myMod1b'
}

export const obj = {
    foo: 'bar',
    foo2: 'bar 2'
}

export const texto = 'texto exportado de mod1'

const nome = 'Gian'
const idade = '17'

export {nome, idade}

console.log(new MyMod2())

export default {
    myMod1,
    arr
}



