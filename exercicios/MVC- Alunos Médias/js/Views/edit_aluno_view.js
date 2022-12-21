class EditAlunoView {
    constructor(form, materias) {
        this.form = form
        this.container = form.querySelector('[data-edit-notas]')
        
        this.materias = materias
        // this.render()
    }

    render(aluno) {
        let html = ``
        this.materias.forEach(materia => {
            html += `
            <div class="row" data-materia="${materia}">
            <div class="input-field col s4">
            <input
                id="materia_${materia}"
                type="text"
                class="validate"
                value="${materia}"
                disabled
            />
            </div>
            <div class="input-field col s2">
            <input data-trimestre="0"
                id="nota_${materia}_0"
                type="number"
                class="validate"
                value="${aluno.notas[materia]?.[0]}"
                step=".1"
            />
            </div>
            <div class="input-field col s2">
            <input data-trimestre="1"
                id="nota_${materia}_1"
                type="number"
                class="validate"
                value="${aluno.notas[materia]?.[1]}"
                step=".1"
            />
            </div>
            <div class="input-field col s2">
            <input data-trimestre="2"
                id="nota_${materia}_2"
                type="number"
                class="validate"
                value="${aluno.notas[materia]?.[2]}"
                step=".1"
            />
            </div>
            <div class="input-field col s2">
            <input data-trimestre="3"
                id="nota_${materia}_3"
                type="number"
                class="validate"
                value="${aluno.notas[materia]?.[0]}"
                step=".1"
            />
            </div>
            </div>
        `
        })

        this.container.innerHTML = html
    }
}