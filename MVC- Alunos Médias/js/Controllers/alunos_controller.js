class AlunosControllers {
    constructor(service, view) {
        this.view = view
        this.service = service
        this.view.render(this.service.alunos)
    }

    add(aluno){
        this.service.add(new AlunoModel(aluno))
        this.view.render(this.service.alunos)
    }

    search(nome) {
        const data = this.service.search(nome)
        this.view.render(data)
    }
}