(function(){
    function calcularInvestimento(valorMes, tempo, porcentagemAA, impostoDeRendaAA, patrimonioInicial) {
        
        
        valorMes = parseFloat(valorMes.replaceAll(',', '.'))
        tempo = parseFloat(tempo.replaceAll(',', '.'))
        porcentagemAA = parseFloat(porcentagemAA.replaceAll(',', '.'))
        impostoDeRendaAA = parseFloat(impostoDeRendaAA.replaceAll(',', '.'))
        
        let patrimonio = 0
        
        if(patrimonioInicial){
            patrimonioInicial = parseFloat(patrimonioInicial.replaceAll(',', '.'))
            patrimonio = patrimonioInicial
        }

        
    
        for(let i = tempo;i > 0; i--){
            let dinheiroGanhoNoAno = 0
    
            for(let i = 12;i > 0; i--){
                patrimonio += valorMes + (patrimonio * (porcentagemAA / 1200))
                dinheiroGanhoNoAno += valorMes + (patrimonio * (porcentagemAA / 1200))
            }
    
            patrimonio = patrimonio - (dinheiroGanhoNoAno * (impostoDeRendaAA / 100))
        }
    
        console.log(patrimonio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
        console.log(patrimonio)
        return patrimonio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
    
    const form = document.querySelector('#form')
    const inputValorMes = document.querySelector('#iValorMes')
   
    const inputPtrIni = document.querySelector('#ipatriInicial')
    const inputTempo = document.querySelector('#itempo')
    const inputRendimento = document.querySelector("#irendimento")
    const inputImposto = document.querySelector('#iimposto')
    const btnEnviar = document.querySelector('#enviar')
    const btnLimpar = document.querySelector('#limpar')
    const output = document.querySelector('#output')

    btnEnviar.addEventListener('click', function(e){
        e.preventDefault()
        
        
        console.log(calcularInvestimento(inputValorMes.value, inputTempo.value, inputRendimento.value, inputImposto.value))

        output.innerText = `Patrimônio Final: ${calcularInvestimento(inputValorMes.value, inputTempo.value, inputRendimento.value, inputImposto.value, inputPtrIni.value)}`
    })

    btnLimpar.addEventListener("click", function(e){
        e.preventDefault()
        inputPtrIni.value = ''
        inputValorMes.value = ''
        inputTempo.value = ''
        inputRendimento.value = ''
        inputImposto.value = ''
        output.innerText = "Patrimônio Final:"
    })
})()







