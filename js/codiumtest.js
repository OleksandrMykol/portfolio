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
