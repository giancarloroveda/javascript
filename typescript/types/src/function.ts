function add(x: number, y: number) {
    return x + y
}

const multiply = (x: number, y: number) => {
    return x * y
}

const subtract: (x: number, y: number) => number = (x, y) => x - y

let teste = subtract(3, 1)

type User = {
    name: string
    id: number
}

type LevelAdmin = "basic" | "intermediate" | "advanced"

// enum LevelAdmin {
//     BASIC = "basic",
//     INTERMEDIATE = "intermediate",
//     ADVANCED = "advanced",
// }

type Admin = {
    isAdmin: true
    level: LevelAdmin
}

type UserAdmin = User & Admin

let gian: UserAdmin = {
    name: "gian",
    id: 1,
    isAdmin: true,
    level: "advanced",
}

type IsAdmin = (user: User) => boolean

const isAdmin: IsAdmin = user => !!(user as UserAdmin).isAdmin

console.log(isAdmin(gian)) // true

let maria: User = {
    name: "maria",
    id: 2,
}

console.log(isAdmin(maria)) // false
