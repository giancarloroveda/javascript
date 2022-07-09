// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)
let minhaVar = "minha 'string'";
let minhavar_ = "minha string com aspas simples"
let minhaVar2 = "minha \"string\" com aspas simples";
console.log
var minhavar3 = `minha template literal`;

// -CONCATENAÇÃO

console.log("hello " + "world");

let comida = 'chocolate';
let msg = `Eu gosto de ${comida} mais do que de você!`;
console.log(msg);
console.log(typeof msg, typeof comida, typeof minhaVar, 'oie', 10);

// Number 
const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

// Bolean 

let isValid = true;
console.log(`isValid: ${isValid}`, typeof isValid);

// Undefined

let varTeste = undefined;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);





