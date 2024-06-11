let stepCount = 0;

function incrementStepCount() {
  stepCount++;
  displayStepCount();
}

function displayStepCount() {
  const stepCounter = document.getElementById('step-counter');
  stepCounter.textContent = `Step ${stepCount}`;
}

const stepButton = document.getElementById('step-button');
stepButton.addEventListener('click', incrementStepCount);

// ?BUTTON CODIUM
function toggleDarkMode() {
  console.log('toggleDarkMode called');
  document.body.classList.toggle('dark-mode');
}
const darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});