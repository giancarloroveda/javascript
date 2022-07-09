const checkbox = document.querySelector("#chkAceito")
const btn = document.getElementById("btn")
checkbox.addEventListener("click", checked)
console.log(checkbox)
console.log(btn)
function checked(){
    console.log(checkbox.checked)
    if(checkbox.checked){
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}