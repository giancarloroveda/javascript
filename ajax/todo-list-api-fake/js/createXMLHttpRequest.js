export function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(data)
        

    xhr.onreadystatechange = verificarAjax

    function verificarAjax(){    
        if(xhr.readyState === 4) {
            if(xhr.status < 400) {
                const json = JSON.parse(xhr.response)
            
                typeof cb === "function" ? cb(json) : ''
                
            } else if (typeof cb === "function") {
                cb({status: xhr.status, message: "Algo deu errado com a conexão", obj: xhr, error: true})
            }
        }
    }
}