const obj = {
    prop1: 'prop1',
    prop2: 'prop2'
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze) //Nao pode criar, nem deletar e nem atualizar props.

Object.seal(objSeal) //Nao pode criar, nem deletar, mas pode atualizar props.

Object.preventExtensions(objPrevent) //Nao pode criar, pode deletar e atualizar props.