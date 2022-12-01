let tipo = ""
const tiposPermitidos = ["mamífero", "anfíbio", "réptil", "ave"]

const cachorro = {
    nome: "rex",

    get tipo() {
        return tipo
    },

    set tipo(_tipo) {
        if(tiposPermitidos.includes(_tipo)) {
            tipo = _tipo
        }
    }
}

// IIFE para evitar sujar o escopo global

(function(){
    let tipo = ""
    const tiposPermitidos = ["mamífero", "anfíbio", "réptil", "ave"]
    
    const gato = {
        nome: "miau",
    
        get tipo() {
            return tipo
        },
    
        set tipo(_tipo) {
            if(tiposPermitidos.includes(_tipo)) {
                tipo = _tipo
            }
        }
    }

    this.gato = gato // essa linha é para que o objeto gato exista no escopo global. o que nao pode existir é a propriedade tipo e o array tiposPermitidos. Dessa forma o objeto gato consegue utilizar as propriedades e arrays criados na mesma funçãoq ue ele, mas elas nao poluem o escopo global.
})()