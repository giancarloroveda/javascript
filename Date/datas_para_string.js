const data = new Date()
console.log(data)
console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleDateString())
console.log(data.toLocaleString('pt-BR', {month: 'long', weekday: 'long', day: 'numeric', year: 'numeric', hour12: 'false', hour:'2-digit', minute: '2-digit', second: '2-digit'}))
console.log(data.toUTCString())

