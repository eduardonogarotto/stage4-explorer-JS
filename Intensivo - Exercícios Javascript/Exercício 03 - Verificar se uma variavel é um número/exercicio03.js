let data = "teste"

const itsNumber = typeof data

if(itsNumber === "number") {
  alert(`O valor da variável é: ${data}. Ou seja, é um número.`)
} else {
  alert(`O valor da variável é: ${data}. Ou seja, NÃO é um número.`)
}