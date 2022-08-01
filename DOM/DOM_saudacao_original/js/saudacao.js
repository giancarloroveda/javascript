(function(){
    
    const userName = "gian"
    const elemento = document.querySelector(".top-bar p")
    if(userName){
    // elemento.textContent += userName
    elemento.innerHTML += "<b>" + userName + "</b>" //a propriedade .innerHTML permite o uso de tags HTML
    } else {
        // elemento.parentElement.style.display = "none" -> Esse método esconde 
        // elemento.parentElement.remove() -> Esse método remove (não da suporte à browsers mais antigos)
        /*const paraRemover = elemento.parentElement                            -> Esse método também remove
        paraRemover = paraRemover.parentElement.removeChild(paraRemover)*/

    }
})()
    
  

    


