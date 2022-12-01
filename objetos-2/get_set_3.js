;(function(){
    const _usuarios = []

    this.pessoa = {
        get usuarios(){
            return [..._usuarios] // criar uma copia de _usuarios para evitar que alguem chegue na referencia original.
        },
        get usuario(){
            if(_usuarios.length) {
                return _usuarios[_usuarios.length -1]
            }
        },
        set usuario(novoUsuario){
            if(_usuarios.indexOf(novoUsuario) < 0) {
                _usuarios.push(novoUsuario)
            }
        }
    }
})()

