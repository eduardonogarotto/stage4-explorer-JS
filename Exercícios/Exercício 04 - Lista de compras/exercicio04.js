const items = [];

for (let i = 0; i < 10; i++) {
  items[i] = prompt(`Vamos comprar 10 itens. Qual será o item nº ${(i+1)}?`);
}

alert(`OK, anotado! Em nossa lista temos: ${items}`);