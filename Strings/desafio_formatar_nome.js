function formatarNome(nome) {
    nome = nome.trim()
    const arr = nome.split(' ')
    if(arr.length === 1){
        return nome
    }
    const primeiroNome = arr.shift()
    return `${arr.join(' ')}, ${primeiroNome}`
}

console.log(formatarNome('Giancarlo Roveda de Jesus'))