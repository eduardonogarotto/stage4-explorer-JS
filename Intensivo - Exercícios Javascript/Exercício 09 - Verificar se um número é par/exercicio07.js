let number = Number(prompt("Insira um número:"))

const itsPair = number % 2

if (itsPair === 0) {
  alert(`O número inserido foi: ${number}. Ou seja, é um número par.`)
} else {
  alert(`O número inserido foi: ${number}. Ou seja, NÃO é um número par.`)
}