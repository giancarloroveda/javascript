const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [2, 2, 3, 3],
        ciencias: [3, 3, 3, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        portugues: [4, 4, 4, 4],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
      },
    },
  ];

const alunosServices = new AlunosServices()



//Calcula a média de matéria por aluno e cria propriedade media

alunos.forEach(function(aluno, i){
    alunosServices.add(new AlunoModel(aluno))
})

const alunosView = new AlunosView(document.querySelector('[tabela-dados-alunos]'))
const alunosController = new AlunosControllers(alunosServices, alunosView)









document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    

    const nome = document.querySelector('#first_name').value

    alunosController.add({nome})

    document.querySelector('#first_name').value = ''
   
})



