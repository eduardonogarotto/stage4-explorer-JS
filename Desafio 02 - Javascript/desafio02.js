const students = [
  {
    name: "João",
    gradeOne: 10,
    gradeTwo: 0.5
  }
,
  {
    name: "Maria",
    gradeOne: 10,
    gradeTwo: 9
  }
,
  {
    name: "Luiz",
    gradeOne: 7,
    gradeTwo: 7
  }
]

const average = (gradeOne, gradeTwo) => ((gradeOne + gradeTwo) / 2).toFixed(2)


for(let i = 0; i < students.length; i++) {
  
  const finalGrade = average(students[i].gradeOne, students[i].gradeTwo)

  if(finalGrade >= 7){
    alert(`A média do(a) aluno(a) ${students[i].name} é ${finalGrade}. \nParabéns, ${students[i].name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${students[i].name} é ${finalGrade}. \nNão foi dessa vez, ${students[i].name}! Tente novamente!`)
  }
}