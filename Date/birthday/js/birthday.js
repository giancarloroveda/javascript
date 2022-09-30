function quantoFaltaPara(m, d) {
    const dataAtual = new Date(1970, new Date().getMonth(), new Date().getDay()) 
    const msFaltando = new Date(1970, m, d).getTime()
    if(msFaltando - dataAtual.getTime() > 0) {
        return parseInt((msFaltando - dataAtual.getTime()) / (1000 * 60 * 60 * 24))
    } else {
        return parseInt((1000 * 60 * 60 * 24 * 365) - ((dataAtual.getTime()) - (msFaltando))) / (1000 * 60 * 60 * 24)
    }
}


