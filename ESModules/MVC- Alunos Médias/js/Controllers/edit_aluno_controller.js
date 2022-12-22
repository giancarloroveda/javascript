export class EditAlunoController {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.service = service
        this.view.render(model)
    }

    edit(aluno, nome) {
        aluno.nome = nome

        const notas = {}
       
        const rows = [...document.querySelectorAll('[data-materia]')]
        
        rows.forEach(function(row, i){
            let inputs = [...row.querySelectorAll('[data-trimestre]')]
            notas[row.getAttribute('data-materia')] = inputs.map( input => input.value || 0)
        })
        aluno.notas = notas    

        this.service.edit(aluno)
        window.location.assign('index.html')
    }
}