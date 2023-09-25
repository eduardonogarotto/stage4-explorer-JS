let numberOne = Number(prompt(`Precisaremos de 2 números para realizar esse desafio.
Por gentileza, insira o primeiro número:`))
let numberTwo = Number(prompt(`Legal, capturei o primeiro número.
Agora insira o segundo número: `))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restDivision = numberOne % numberTwo
const itsPair = sum % 2
  
alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + subtraction)
alert("A multiplicação dos dois números é: " + multiplication)
alert("A divisão dos dois números é: " + division)
alert("O resto da divisão dos dois números é: " + restDivision)

if (itsPair === 0) {
  alert("A soma dos dois números é par: " + sum)
 } else {
  alert("A soma dos dois números é impar: " + sum)    
}

if (numberOne === numberTwo) {
alert("Os números inseridos são iguais.")
} else {
alert("Os números inseridos são diferentes.")
}