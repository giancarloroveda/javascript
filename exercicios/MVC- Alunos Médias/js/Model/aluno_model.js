class AlunoModel {
    constructor({nome, _id, notas = {}}){
        this.nome = nome
        this._id = (_id !== undefined) ? _id : this.generateId()
        this.notas = {...notas}
        
        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.medias = {}

        for (let materia in this.notas) {
            this.medias[materia] = average(...this.notas[materia])
        }
    }

    generateId(){
        return AlunoModel.maxId + 1
    }
}

AlunoModel.maxId = 0