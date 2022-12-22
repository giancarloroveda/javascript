export class AlunosView {
    constructor(table, materias){
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = materias

        this.renderHeader()
    }

    render(alunos){
        this.tableBody.innerHTML = ''
        alunos.forEach(aluno => {
            let trAluno = document.createElement('tr')
            
            trAluno.innerHTML = `<td><a href="edit.html?id=${aluno._id}" id="nome_aluno">${aluno.nome}</a></td>`

            let encontrado = false
            this.materias.forEach(materia => {
                // if(aluno.notas[materia]) {
                //     encontrado = true
                // }
                if(materia in aluno.notas){
                    encontrado = true
                }
            })

            let htmlMediasAluno = ''
            if(!encontrado) {
                htmlMediasAluno = `<td colspan=${this.materias.length}>
                    <a href="edit.html?id=${aluno._id}"> Incluir notas</a>
                </td>`
            } else {
                htmlMediasAluno = this.materias.map(materia => {
                    return `<td>
                    ${aluno.medias[materia] !== undefined && aluno.medias[materia] !== null ? aluno.medias[materia] : `<a href="edit.html?id=${aluno._id}"> Incluir notas</a>`}
                    </td>`
                }).join('')
            }
            
            

            trAluno.innerHTML += htmlMediasAluno

            this.tableBody.appendChild(trAluno)
        })
    }

    renderHeader(){
        const trHeader = document.createElement('tr')
        trHeader.innerHTML = `<td>Nome</td>`
        const htmlMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
        
        trHeader.innerHTML += htmlMaterias
        this.tableHeader.appendChild(trHeader)
    }
}