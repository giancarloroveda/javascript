// Conversão implícita

let n1 = 10;
let n2 = "2";

console.log(n1 * n2, typeof n1, typeof n2);
console.log(n1 / n2, typeof n1, typeof n2);
console.log(n1 - n2, typeof n1, typeof n2);

// Erro na soma(entende como concatenação)

console.log(n1 + n2, typeof n1, typeof n2);

// Conversão

// parseFloat, parseInt, Number()

let n3 = "10.1233";
n3 = parseInt(n3);
let n4 = 2;
console.log(n3 + n4, typeof n3, typeof n4)

let n3_ = "10.151";
n3_ = parseFloat(n3_)
let n4_ = 2;
console.log(n3_ + n4_, typeof n3_)

// let n33 = "a12addds5134";
// n33 = parseInt(n33);
// let n44 = 2;
// console.log(n33 + n44, typeof n33, typeof n44, n33)
let n33 = "15.4";
n33 = Number(n33);
let n44 = 2;
console.log(n33 + n44, typeof n33, typeof n44, n33);

// Conversão de número em string

// n2 = 10;
// n2 = n2 +"";
// console.log(n2, typeof n2)

// decimais -> 10 -> 0 - 9
// hexadecimais -> 16 -> 0 - f(15)
// binários -> 2

n2 = 10;
n2 = n2.toString(2);
console.log(n2, typeof n2)














