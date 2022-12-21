function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments].map(number => parseFloat(number))
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function average() {
    return sum(...arguments) / arguments.length
}