function replaceAll1(str1, str2) {
    if(typeof str1 !== "string" || typeof str2 !== "string") {
        throw new Error("Os parâmetros passados devem ser strings")
    }

    let stringOriginal = this.valueOf().trim()
    let arrStr = [...stringOriginal]
    let indice = stringOriginal.indexOf(str1)
    let newString = ''
  
    while(indice >= 0) {
        arrStr.splice(indice, str1.length, str2)
        newString = arrStr.join('')
        indice = newString.indexOf(str1)
    }

    return newString

}

String.prototype.replaceAll1 = replaceAll1












