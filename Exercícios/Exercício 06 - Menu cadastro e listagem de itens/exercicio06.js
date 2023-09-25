let option
const items = []

while (option != "3") {

  let option = prompt(`Olá usuário! Digite o número da opção desejada: 

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. sair do programa`)

  switch (option) {
    case "1":
      let item = prompt("Digite o nome do item: ")
      items.push(item)
      break;

    case "2":
      if(items.length == 0) {
        alert("Não existem itens cadastrados.")
      } else {
        alert(items)
      }
      break;

    case "3":
      alert("Você escolheu sair do programa.")
      exit() //encerra o while
      break;

    default:
      alert("Você digitou uma opção inválida.")
  }
}