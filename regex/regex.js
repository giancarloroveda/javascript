const string = "nova string";

console.log(string.search(/string/));
console.log(string.match(/string/));

const regex = /^\d{5}-?\d{3}$/;
const regex_ = new RegExp()

console.log(regex.test("89160-286"));
console.log(regex.exec("89160-286"));
