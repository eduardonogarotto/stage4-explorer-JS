let data = true

const itsBoolean = typeof data

if(itsBoolean === "boolean"){
  alert(`O valor da variável é: ${data}. Ou seja, é um booleano.`)
} else {
  alert(`O valor da variável é: ${data}. Ou seja, NÃO é um booleano.`)
}