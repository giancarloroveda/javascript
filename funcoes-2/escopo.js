const str = 'global string'

function teste(){
    const str = 'local string'
    console.log(str)
    console.log('-------------- this de teste')
    console.log(this)

    //quando usado uma declaração de função dentro de um setTimeout, o this é modificado, a menos que se use uma arrow function.

    setTimeout(() => {  
        console.log('----------- this settimeout')
        console.log(this)
    }, 2000)
}

//Em arrow functions, quando se fala em DOM, o this aponta pro objeto window, independente se está sendo executado por um objeto. No caso do Node, aponta para um objeto vazio.

const teste2 = () => {  
    console.log('arrow function')
    console.log(this)
}

const obj = {
    foo: 'bar',
    teste,
    teste2
}

// teste()
// teste2()

obj.teste()
// obj.teste2()