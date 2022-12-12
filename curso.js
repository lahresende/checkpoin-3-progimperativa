
export default function Curso(nome, notaAprovacao, maximoFaltas, estudantes) {
    this.nome = nome;
    this.notaAprovacao = notaAprovacao;
    this.maximoFaltas = maximoFaltas;
    this.estudantes = estudantes;  
    this.addAluno = (aluno) => this.estudantes.push(aluno);
  
  }