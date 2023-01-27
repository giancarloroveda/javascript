module.exports.teste = "string de teste";
exports.fn = () => {
    console.log("fn executada com sucesso");
    return "valor ded retorno da fn";
};

// o que realmente é exportado é o module.exports (por padrão, um objeto), tanto é que se um novo valor for atribuido ao module.exports ou ao exports, como em: module.exports = any, eles nao apontarão mais para o mesmo objeto.
