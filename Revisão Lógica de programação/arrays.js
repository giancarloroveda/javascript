const arr = new Array()
arr[0] = "Daniel"
arr[1] = 10
console.log(arr)
const arr2 = new Array(true, "Gian", 17, new Array(2, 4, 10))
console.log(arr2)
console.log(arr2[3][1])
console.log(arr2[3].length)
console.log(arr2[3][arr2[3].length - 1])

//sintaxe literal

const arr3 = ["daniel", 40, [3, 6 , 9], true]
console.log(arr3[2][arr3[2].length -2])
arr3[4] = "oi"
arr3[arr3.length] = "novo valor"
arr3.push("adicionado com push")
arr3.push("a", "b", "c")
console.log(arr3)
let n = 6
console.log(arr3[n])