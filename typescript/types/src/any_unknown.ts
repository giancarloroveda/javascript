function add(x: unknown, y: unknown) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    }
    return null
}

const teste = add(3, 5)

export default null
