let count = 0;
const counterElement = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');

// AO CLICAR NA TELA ADICIONA +1 PONTO NO CONTADOR
document.addEventListener('click', () => {
  count++;
  counterElement.textContent = count < 10 ? '0' + count : count;
});
// AO CLICAR NO BOTÃO VOLTA O CONTADOR PARA 0
resetButton.addEventListener('click', (event) => {
  event.stopPropagation(); //EVITA QUE O BOTÃO ADICIONE PONTOS NO CONTADOR
  count = 0;
  counterElement.textContent = '00';
});
// ESCREVE O 00 DO CONTADOR
counterElement.textContent = '00';