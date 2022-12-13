//Parte um
import Aluno from "./aluno.js";
import Curso from "./curso.js";

let alunos = [
  new Aluno("maria", 1, [7,8]),
  new Aluno("jose", 0, [8,7]),
  new Aluno("joao", 0, [9,9])
]

let novoAluno = new Aluno("paula", 1, [7,8]);
let curso = new Curso("curso1",7,5, alunos);


console.log(alunos[0].calcularMedia());  
console.log(alunos[0].qtdeFaltas);  
alunos[0].faltas();
console.log(alunos[0].qtdeFaltas);  
console.log(curso.estudantes.length);  
curso.addAluno(novoAluno)
console.log(curso.estudantes.length);

//Parte dois

      //questao 5
console.log(curso.avaliarAluno(novoAluno));

      //questao 6, 7
console.log(curso.avaliarAlunosCurso());