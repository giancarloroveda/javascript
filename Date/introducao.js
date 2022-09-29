const data = new Date()
console.log(data)
console.log(data.getDay()) //dia da semana -> domingo = 0; sábado = 6
console.log(data.getDate()) // dia do mês
console.log(data.getMonth()) // mês do ano -> janeiro = 0; dezembro = 11
console.log(data.getTime()) // número de milissegundos decorridos desde 1 de janeiro de 1970 à meia noite.
console.log(data.getFullYear()) // ano
console.log(data.getHours()) // hora
console.log(data.getUTCHours()) // hora no UTC 0
console.log(data.getMinutes()) //minutos (tem pra segundos e milisegundos e todos tem a versao em UTC)
console.log(new Date(1969, 4, 11, 6, 30, 20, 8)) // ano, mês, dia, hora, minuto, segundo, milissegundo

// o valor da constante data foi setado na hora em que ela foi definida, e pode ser mudado utilizando metodos do tipo setDay,
// todos os metodos apresentados acima tem sua "versão set".

