//Parte um
export default function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.qtdeFaltas = faltas;
  this.notas = notas;
  this.calcularMedia = () => this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
  this.faltas = () => this.qtdeFaltas++;
}