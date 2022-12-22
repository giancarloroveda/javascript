import {AlunosServices} from './js/Services/alunos_services.js'
import {EditAlunoView} from './js/Views/edit_aluno_view.js'
import {MateriasService} from './js/Services/materias_services.js'
import {EditAlunoController} from './js/Controllers/edit_aluno_controller.js'


const alunosService = new AlunosServices()

      const URLParams = new URLSearchParams(location.search)
        
      const id = parseInt(URLParams.get('id'))
     
      const aluno = alunosService.searchById(id)
     
      document.getElementById('first_name').value = aluno.nome

      const editAlunoView = new EditAlunoView(document.querySelector("[data-edit-aluno-form]"), new MateriasService().materias)

      const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunosService)

      document.querySelector("[data-edit-aluno-form]").addEventListener('submit', function(e){
        e.preventDefault()
        const nome = document.querySelector('#first_name').value
        
        editAlunoController.edit(aluno, nome)
      })