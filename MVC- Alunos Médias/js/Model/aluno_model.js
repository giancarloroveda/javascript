class AlunoModel {
    constructor({nome, _id, notas = {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.generateId()
        this.notas = {...notas}
        
        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.medias = {}

        this.generateAverage()
    }

    generateId(){
        AlunoModel.maxId++
        localStorage.setItem('maxId', JSON.stringify(AlunoModel.maxId))
        return AlunoModel.maxId
    }

    generateAverage(){
        for (let materia in this.notas) {
            this.medias[materia] = average(...this.notas[materia])
        }
    }

}

AlunoModel.maxId = JSON.parse(localStorage.getItem('maxId'))