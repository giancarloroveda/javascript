import axios, { AxiosResponse } from "axios"

export type ResponseUser = { name: string, id: number, email: string }

axios.get<Array<ResponseUser>>("http://localhost:3000/users")
    .then(response => {
        const resposta = response.data
        console.log(resposta)
    })

const maria: ResponseUser = { name: "Maria", id: 2, email: "maria@server.com" }

// axios.post<ResponseUser>("http://localhost:3000/users", maria)
//     .then(response => {
//         console.log(response.data.id)
//     })


const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get("http://localhost:3000/users/" + id)
}

getUser(2).then(({ data }) => console.log(data.name))
