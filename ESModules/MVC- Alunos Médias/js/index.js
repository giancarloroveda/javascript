// const alunos = [
//     {
//       _id: 0,
//       nome: "chico melato",
//       notas: {
//         portugues: [1, 1, 2, 2],
//         matematica: [2, 2, 2, 2],
//         historia: [2, 2, 3, 3],
//         ciencias: [3, 3, 3, 3],
//       },
//     },
//     {
//       _id: 1,
//       nome: "talita lima",
//       notas: {
//         portugues: [4, 4, 4, 4],
//         matematica: [4, 4, 5, 5],
//         historia: [5, 5, 6, 6],
//         ciencias: [7, 7, 8, 9],
//       },
//     },
//   ];
import {AlunosServices} from './Services/alunos_services.js'
import {AlunosView} from './Views/alunos_views.js'
import {MateriasService} from './Services/materias_services.js'
import {AlunosControllers} from './Controllers/alunos_controller.js'

const alunosServices = new AlunosServices()




const alunosView = new AlunosView(document.querySelector('[tabela-dados-alunos]'), new MateriasService().materias)
const alunosController = new AlunosControllers(alunosServices, alunosView)


alunosController.view.render(alunosServices.alunos)


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    
    const nome = document.querySelector('#first_name').value

    alunosController.add({nome})

    document.querySelector('#first_name').value = ''
   
})

document.querySelector('#search_name').addEventListener('input', function(e){
    const nome = document.querySelector('#search_name').value

    sessionStorage.setItem('search', document.querySelector('#search_name').value)

    if(nome.length > 2 || nome.length === 0) {
        alunosController.search(nome)
    }
    
})

const inputEvent = new Event('input')
    if(sessionStorage.getItem('search')){
        document.querySelector('#search_name').value = sessionStorage.getItem('search')
        document.querySelector('#search_name').dispatchEvent(inputEvent)
    }



