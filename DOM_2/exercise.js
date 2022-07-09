const inputA = document.querySelector("#indice-a")
const inputB = document.querySelector("#indice-b")
const inputC = document.querySelector("#indice-c")
const p = document.querySelector("p")
const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let a = inputA.value
    let b = inputB.value
    let c = inputC.value
    p.textContent = raizes(a, b, c)
     
})
function raizes(a, b, c){
    let delta = (b ** 2) - (4 * a * c)
    console.log(a, b, c)
    console.log(delta)
    if(delta <= 0){
        return console.log("O delta é negativo!")
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return `As raízes da equação são: ${x1} e ${x2}`
}








