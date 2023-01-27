type User = {
    nome: string
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
    nome: "gian",
    id: 1,
    isAdmin: true,
    level: "advanced",
}

export default null