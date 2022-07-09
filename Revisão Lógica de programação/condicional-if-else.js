let idade = 17;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`)

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : 'É menor de idade' //OPERADOR TERNÁRIO

if(comprouBilhete){
    console.log("Sim, comprou o bilhete!")
} else {
    console.log("Não, não comprou o bilhete!")
} 
console.log(msgMaiorIdade)
if(paisPresentes){
    console.log('Os pais estão presentes!')
} else [
    console.log('Os pais não estão presentes!')
]

// Precedência de operadores
let n1 = 0
let n2 = 6
let media = (n1 + n2) / 2
console.log(`media: ${media}`)

if(n1 === 0 || n2 === 0){
    console.log('Reprovado')
} else if(media < 7){
    console.log('Reprovado, mas há como recuperar')
} else {
    console.log(`Aprovado, parabéns`)
}





