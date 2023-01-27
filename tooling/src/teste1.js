import axios from "axios";

const x = 10;

class Teste {
    constructor(n) {
        this.teste = n;
    }
}

async function getAddress(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const resposta = await axios.get(url);
        const json = resposta.data;
        return json;
    } catch (e) {
        throw e;
    }
}

getAddress("89160286").then((data) => console.log(data));
