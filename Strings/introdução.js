let str1 = "Minha String"
// console.log(str1.replace("i", "o"))
// console.log(str1.replaceAll("i", "o"))
// console.log(str1)

// console.log(str1.indexOf('i'))
// console.log(str1.lastIndexOf('i'))
// console.log(str1.indexOf('dasdasd'))
console.log(str1.includes('Minha', 0))
// console.log(str1.indexOf('minha') >= 0)

console.log(str1.slice(0, 5))
console.log(str1.substring(0, 5))
console.log(str1.slice(-5, -2))
console.log(str1.substring(-5, -2))
console.log(str1.slice(8, 1))
console.log(str1.substring(8, 1))

// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())
// console.log(str1)

// let strAsObj = new String("minha string como objeto")
// console.log(strAsObj)
// console.log(strAsObj.valueOf())
// console.log(strAsObj.toString())

str2 = `

     teste

`
// console.log(str2)
// console.log('-----------------')
// console.log(str2.trim())
// console.log('-----------------')
// console.log(str2.trimEnd())
// console.log('-----------------')
// console.log(str2.trimStart())
// console.log('-----------------')
// console.log(str2)

str3 = '0123456789'
// console.log(str3.padStart(20))  //muda o .length
// console.log(str3.padStart(20, '*'))
// console.log(str3.padEnd(20))
// console.log(str3.padEnd(20, '*'))
// console.log(str3)

let telefone = '98863-0497'

// function mascararTelefone (numero) {
//     let n1 = numero.slice(0, 1)
//     let n2 = numero.slice(-2)
//     let numeroMascarado = n1.padEnd(5, '*') + '-' + n2.padStart(4, '*')
//     return numeroMascarado
// }

// function mascararTelefone (numero) {
//     let hifemPosicao = numero.indexOf('-')
//     console.log(hifemPosicao)
//     let n1 = numero.slice(0, 1)
//     let n2 = numero.slice((hifemPosicao) + (3))
//     return n1.padEnd(hifemPosicao, '*') + '-' + n2.padStart(((numero.length) - (++hifemPosicao)), '*' )
// }

// console.log(mascararTelefone(telefone))

let str4 = 'hoje é sábado'

console.log(str4.startsWith('je', 2))
console.log(str4.endsWith('sábado', str4.length - 1))

console.log(str4.charAt(0))
console.log(str4.charCodeAt(0))