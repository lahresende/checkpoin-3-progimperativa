//Parte um
import estudantes from "./estudantes.js";

//export default function Curso(nome, notaAprovacao, maximoFaltas, estudantes) {
export default function Curso(nome, notaAprovacao, maximoFaltas) {
  this.nome = nome;
  this.notaAprovacao = notaAprovacao;
  this.maximoFaltas = maximoFaltas;
  this.estudantes = estudantes;  
  this.addAluno = (aluno) => this.estudantes.push(aluno);
  this.avaliarAluno = (aluno) => {
    if (aluno.qtdeFaltas < this.maximoFaltas && aluno.calcularMedia() >= this.notaAprovacao) {
      return true;
    } else if (aluno.qtdeFaltas === this.maximoFaltas && aluno.calcularMedia() > (this.notaAprovacao * 1.10)) {
      return true;
    } else {
      return false;
    }
  };
  this.avaliarAlunosCurso = () => {    
    return this.estudantes.map((aluno) => this.avaliarAluno(aluno));
  };
}