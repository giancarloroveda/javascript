const firstName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")
console.log(firstName, lastName)

function getByFlag(flag) {
    return process.argv[process.argv.indexOf(flag) + 1]
}