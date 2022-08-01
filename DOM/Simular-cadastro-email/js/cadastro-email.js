const txtEmail = document.getElementById("txtEmail")
const txtFeedback = document.getElementById("newsletterFeedback")

function mostrarFeedback(){
    let txtValue = txtEmail.value
    txtFeedback.innerHTML = `O email ${txtValue} foi cadastrado com sucesso`
}