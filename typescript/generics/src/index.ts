type NumberOrString = number | string

function somaOuConcatenaG<T extends NumberOrString>(x: T, y: T) {
    return (typeof x === "number" && typeof y === "number") ? x + y : x + "" + y
}

somaOuConcatenaG(1, 2)
somaOuConcatenaG("1", "2")
// somaOuConcatenaG(1, "2") ERRO
// somaOuConcatenaG("1", 2) ERRO
// somaOuConcatenaG(false, true) ERRO
