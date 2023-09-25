let number1 = prompt("Insira um número:");
let number2 = prompt("Insira outro número:");
let operator = prompt("Qual operação matemática deseja realizar? Soma, subtração, multiplicação, divisão ou resto da divisão. \n\nInsira o símbolo do operador. Ex.:\n + para soma\n - para subtração\n * para multiplicação\n / para divisão\n % para o resto da divisão");

let result;

switch (operator) {
  case "+": 
    result = Number(number1) + Number(number2);
    break;
  
  case "-":
    result = Number(number1) - Number(number2);
    break;

  case "*":
    result = Number(number1) * Number(number2);
    break;

  case "/":
    result = Number(number1) / Number(number2);
    break;  

  case "%":
    result = Number(number1) % Number(number2);
    break;

  default: alert("O operador matemático não foi inserido corretamente.")
  }

  alert(`O resultado da operação é ${result}`);