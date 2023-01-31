// Partial

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}


type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

// const square2: Partial<Square> = { x: 30 }


const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square, { x: 40, height: 75 })

console.log(square)
// console.log(square2)
console.log(square3)

//Pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 10,
    y: 30
}


//Omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    height: 300
}


// Exclude<T, U> 
type SquareColor = "red" | "green" | "blue" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "gray" | "darkblue"


// Extract
type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>


// Required
type User = {
    readonly name: string;
    email: string;
    id?: number
}

type UserGet = Required<User>

type UserPatch = Partial<User>
const maria: UserPatch = {
    name: "maria"
}


// Readonly
type UserRead = Readonly<User>
const giancarlo: User = {
    name: "Giancarlo",
    email: "giancarlo@server.com",
}

giancarlo.email = "email alterado"


// NonNullable
type Cpf = {
    cpf: string
}

type Cnpj = {
    cnpj: string
}

type User2 = Cpf | Cnpj | null | undefined

const user: NonNullable<User2> = {
    cpf: "",
    cnpj: ""
}


// Record<T, U>
type Url = {
    url: string
}

type MidiasSociais = "facebook" | "instagram" | "youtube"

const midias: Record<MidiasSociais, Url> = {
    facebook: { url: "facebook.com" },
    instagram: { url: "instagram.com" },
    youtube: { url: "youtube.com" }
}


// conditional types

type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number) {

}

myFunction<boolean>(2)

function myFunction2<T>(param: T) {
    return function (param2: T extends number ? boolean : MyString) { }
}

const minhaFuncao = myFunction2(13)
minhaFuncao(!!2)

type NumberOrNever<T> = T extends number ? number : never

let teste: NumberOrNever<string>

// type OnePropertyOfSquare = "x" | "y" | "width" | "height"
type OnePropertyOfSquare = keyof Square
let onePropertyOfSquare: OnePropertyOfSquare = "x"


// Mapped Types
type Props = "x" | "y" | "z" | "a"

// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number,
//     "a": number,
// }

type MappedFromProps<T extends number | string | symbol> = {
    [P in T]: P
}

type MyMappedTypes = MappedFromProps<Props>

type MappedFromProps2<T extends Object> = {
    readonly [P in keyof T]: T[P]
}

type MyMappedTypes2 = MappedFromProps2<{ a: string, b: string }>


// Lookup Types
type BankAccount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}

type Id = BankAccount["id"]
type Digit = BankAccount["count"]["digit"]
type Count = BankAccount["count"]


// typeof
const myCount: BankAccount = {
    id: 10,
    name: "Giancarlo",
    count: {
        agency: 12,
        code: 7,
        digit: 3
    }
}

type TypeOfMyCount = typeof myCount
type TypeOfMyCountId = typeof myCount.id

let minhaString = "ola mundo"
let string2: typeof minhaString




