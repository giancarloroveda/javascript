(function(){
    const userName = null

    if(userName){
        const elementoCriado = document.createElement("div")
        elementoCriado.className = "top-bar"
        elementoCriado.innerHTML = `<p> Olá, <b> ${userName} <b></p>`

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(elementoCriado, elementoPai.FirstElementChild)
    }
   
})()

    


