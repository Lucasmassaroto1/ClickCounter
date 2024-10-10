let count = 0;
const counterElement = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');

// ANIMAÇÃO NO MOUSE
function createClickAnimation(x, y) {
  const circle = document.createElement('div');
  circle.style.position = 'absolute';
  circle.style.border = '3px solid rgba(255, 255, 255, 0.8)';
  circle.style.borderRadius = '50%';
  circle.style.width = '30px';
  circle.style.height = '30px';
  circle.style.left = `${x - 15}px`;
  circle.style.top = `${y - 15}px`;
  circle.style.pointerEvents = 'none';
  circle.style.opacity = '1';
  circle.style.transform = 'scale(0)';
  circle.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.style.transform = 'scale(3)';
    circle.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    circle.remove();
  }, 600);
}

// AO CLICAR NA TELA ADICIONA +1 PONTO NO CONTADOR
document.addEventListener('click', () => {
  count++;
  counterElement.textContent = count < 10 ? '0' + count : count;
// CRIA A ANIMAÇÃO DO MOUSE
  createClickAnimation(event.clientX, event.clientY);
});
// AO CLICAR NO BOTÃO VOLTA O CONTADOR PARA 0
resetButton.addEventListener('click', (event) => {
  event.stopPropagation(); //EVITA QUE O BOTÃO ADICIONE PONTOS NO CONTADOR
  count = 0;
  counterElement.textContent = '00';
});
// ESCREVE O 00 DO CONTADOR
counterElement.textContent = '00';