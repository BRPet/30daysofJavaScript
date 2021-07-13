//de 80-100, A
//de 70-89, B
//de 60-69, C
//de 50-59, D
//de 0-49, F

let notaAluno = 50;
let scoreA = notaAluno >= 80 && notaAluno <= 100;
let scoreB = notaAluno >= 70 && notaAluno <= 89;
let scoreC = notaAluno >= 60 && notaAluno <= 69;
let scoreD = notaAluno >= 50 && notaAluno <= 59;
let scoreF = notaAluno >= 0 && notaAluno <= 49;

if (scoreA) {
  console.log("A");
} else if (scoreB) {
  console.log("B");
} else if (scoreC) {
  console.log("C");
} else if (scoreD) {
  console.log("D");
} else if (scoreF) {
  console.log("F");
}
