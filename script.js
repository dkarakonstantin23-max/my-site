const startBtn = document.getElementById('startBtn');
const form = document.getElementById('form');
const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

startBtn.addEventListener('click', () => {
  form.style.display = 'block';
  startBtn.style.display = 'none';
});

function nextStep(){
  steps[currentStep].style.display = 'none';
  currentStep++;
  if(currentStep < steps.length){
    steps[currentStep].style.display = 'block';
  }
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let result = `Имя: ${document.getElementById('name').value}<br>
Телефон: ${document.getElementById('phone').value}<br>
Email: ${document.getElementById('email').value}<br>`;
  for(let i=1;i<=1;i++){ // поменяй на i<=14 для всех вопросов
    let q = document.getElementById('q'+i);
    if(q) result += `Вопрос ${i}: ${q.value}<br>`;
  }
  document.getElementById('status').innerHTML = "Заявка принята!<br>"+result;
  form.style.display = 'none';
  startBtn.style.display = 'inline-block';
});
