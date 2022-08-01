const txtEmail = document.getElementById("txtEmail")

function editarEmail(){
    
    txtEmail.disabled = false
    txtEmail.focus()
    if(txtEmail.value === "example@server.com"){
        txtEmail.value = ""
    }
    
}

function disableEmail(){
    txtEmail.disabled = true
    if(txtEmail.value === ""){
    txtEmail.value = "example@server.com"
    }
}



