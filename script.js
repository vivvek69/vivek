let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progress = document.getElementById('progress');
showQuestion(currentQuestion);

function showQuestion(n) {
  questions.forEach((question, index) => {
    question.style.display = index === n ? 'block' : 'none';
  });
  document.getElementById('prevBtn').style.display = n === 0 ? 'none' : 'inline';
  document.getElementById('nextBtn').style.display = n === questions.length - 1 ? 'none' : 'inline';
  document.getElementById('submitBtn').style.display = n === questions.length - 1 ? 'inline' : 'none';
  progress.innerText = `Question ${n + 1} of ${questions.length}`;
}

function changeQuestion(n) {
  currentQuestion += n;
  if (currentQuestion >= 0 && currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  }
}

function calculateScore() {
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);
  let score = 0;

  for (let entry of formData.entries()) {
    score += parseInt(entry[1]);
  }

  let resultText;

  if (score <= 16) {
    resultText = "Your mental health appears to be in good shape. Keep maintaining a healthy balance!";
  } else if (score <= 25) {
    resultText = "You may be experiencing some stress or mild mental health concerns. Consider talking to a friend or a professional.";
  } else {
    resultText = "You might be experiencing significant mental health issues. It's important to seek help from a mental health professional.";
  }

  document.getElementById('result').innerText = resultText;
}
