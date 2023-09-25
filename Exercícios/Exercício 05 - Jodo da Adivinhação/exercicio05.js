let guess = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
  let randomNumber = Math.round(Math.random() * 10);
  let numberAttempts = 1;

  while (Number(guess) != randomNumber) {
    guess = prompt("Tente novamente: ");
    numberAttempts++;
  }

  if (numberAttempts == 1) {
  alert(`Parabéns! O número que eu pensei foi ${randomNumber}. Você adivinhou o número em ${numberAttempts} tentativa.`);
  } else {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber}. Você adivinhou o número em ${numberAttempts} tentativas.`);
  }