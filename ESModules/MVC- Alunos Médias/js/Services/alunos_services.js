import {AlunoModel} from './../Model/aluno_model.js'

export class AlunosServices {
    constructor(){
        this.alunos = []
        this.updateAlunosFromLocalStorage()
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel){
            throw TypeError('Aluno deve ser instância de AlunoModel.')
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    edit(aluno) {
        aluno.generateAverage()
        this.updateLocalStorage()
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage() {
        localStorage.setItem('alunos', JSON.stringify(this.alunos))
    }

    updateAlunosFromLocalStorage() {
        const local = localStorage.getItem('alunos')
        if(local) {
            const alunos = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }

    search(nome) {
        return this.alunos.filter(aluno => aluno.nome.includes(nome, 0))
    }
}

