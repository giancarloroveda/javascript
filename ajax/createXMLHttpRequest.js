function createXMLHttpRequest(method, url, cb, data = null) {

    console.log('inicio execução createXMLHttpRequest')
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(data)
        

    xhr.onreadystatechange = verificarAjax

    function verificarAjax(){
        console.log('statechange')
            
        if(xhr.readyState === 4) {
            if(xhr.status === 200 || xhr.status === 304) {
                const json = JSON.parse(xhr.response)
                
                typeof cb === "function" ? cb(json) : ''
                
            } else if (typeof cb === "function") {
                cb({status: xhr.status, message: "Algo deu errado com a conexão", obj: xhr})
            }
        }
    }
}