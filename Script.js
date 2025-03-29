let score = 0;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');

clickerButton.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;

  const RandomColor = getRandomColor();
  document.body.style.backgroundColor = RandomColor;
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6; i++) {
        color+= letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
