function teste(str, n){
    console.log(this)
    console.log(this.name)
    console.log(str)
    console.log(n)
}
//o primeiro parâmetro é o novo objeto para o qual o this aponta

teste.call({name: 'maria'}, 'string', 20)
teste.apply({name: 'joão'}, ['string', 20])
teste.call({name: 'joão'}, ...['string', 20])

const teste2 = teste.bind({name: 'joana'}) //retorna uma nova função com o this modificado

teste2('Romeu', 30)