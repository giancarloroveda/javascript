class AlunosServices {
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError('Aluno deve ser instância de AlunoModel.')
        }
        this.alunos.push(aluno)
    }

    edit(aluno){
        return aluno
    }
}