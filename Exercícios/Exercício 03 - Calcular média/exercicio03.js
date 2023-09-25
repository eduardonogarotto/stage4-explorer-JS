let name = prompt("Digite o nome do aluno:");
let grade1 = prompt("Digite a primeira nota do aluno:");
let grade2 = prompt("Digite a segunda nota do aluno:");
let grade3 = prompt("Digite a terceira nota do aluno:");

let average = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
average = average.toFixed(2);

if (average > 6) {
  alert(`O(A) aluno(a) ${name} tirou ${grade1} na primeira prova, ${grade2} na segunda prova e ${grade3} na terceira prova. \nA média do(a) aluno(a) é: ${average}. Sendo assim, o(a) aluno(a) foi aprovado(a) e esta de parabéns.`);
} else {
  alert(`O(A) aluno(a) ${name} tirou ${grade1} na primeira prova, ${grade2} na segunda prova e ${grade3} na terceira prova. \nA média do(a) aluno(a) é: ${average}. Sendo assim, o(a) aluno(a) não foi aprovado(a). Porém, o(a) aluno(a) poderá estudar mais e fazer uma prova de recuperação.`);    
}