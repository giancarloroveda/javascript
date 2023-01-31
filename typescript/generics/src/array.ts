type ArrUniqueTypes<T> = T[]

const teste: ArrUniqueTypes<number> = [1, 2, 3, 4]
const teste2: ArrUniqueTypes<number | boolean> = [10, 20, true]

const arrNumbers: number[] = [1, 2, 3, 4]
const arrNumbers2: Array<number> = [1, 2, 3, 4]