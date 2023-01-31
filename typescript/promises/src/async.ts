import axios from "axios"
import { ResponseUser } from "./index"

async function Fn(): Promise<number> {
    return 200
}

const fn = Fn()

fn.then(n => console.log(`Valor de n: ${n}`))

async function getUser(id: number): Promise<ResponseUser> {
    try {
        const resposta = await axios.get<ResponseUser>("http://localhost:3000/users/" + id)
        return resposta.data
    } catch (e) {
        throw e
    }
}

getUser(2).then(dado => {
    console.log(dado)
}).catch(erro => console.log(erro.message))