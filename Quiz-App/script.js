// Quiz questions and answers
const questions = [
    // Question 1
    {
      question: "Which Cricket Team win 2023 ICC World Cup?",
      answers: [
        { text: "Australia", correct: "true" },
        { text: "England", correct: "false" },
        { text: "India", correct: "false" },
        { text: "New Zealand", correct: "false" },
      ]
    },
    // Question 2
    {
      question: "How many players in cricket team?",
      answers: [
        { text: "10", correct: "false" },
        { text: "8", correct: "false" },
        { text: "11", correct: "true" },
        { text: "6", correct: "false" },
      ]
    },
    // Question 3
    {
      question: "Which of these teams has won the most ICC Champions Trophy titles?",
      answers: [
        { text: "England", correct: "false" },
        { text: "South Africa", correct: "false" },
        { text: "New Zealand", correct: "false" },
        { text: "Australia", correct: "true" },
      ]
    },
    // Question 4
    {
      question: "Who is captain of Australian Cricket team?",
      answers: [
        { text: "David Warner", correct: "false" },
        { text: "Steve Smith", correct: "false" },
        { text: "Travis Head", correct: "false" },
        { text: "Pat Cummins", correct: "true" },
      ]
    },
    // Question 5
    {
      question: "How many overs in ODI match?",
      answers: [
        { text: "20", correct: "false" },
        { text: "50", correct: "true" },
        { text: "10", correct: "false" },
        { text: "100", correct: "false" },
      ]
    }
  ];
  
  // HTML elements
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  // Quiz state variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  // Display the current question
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    // Create buttons for each answer
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
  
      // Set data attribute to mark correct answers
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
  
      // Add click event listener for answer selection
      button.addEventListener("click", selectAnswer);
    });
  }
  
  // Reset the quiz state
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  // Handle answer selection
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    // Add styling for correct/incorrect answers
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    // Disable all answer buttons
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
    });
  
    // Display the next button
    nextButton.style.display = "block";
  }
  
  // Show the final score
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  // Handle the next button click
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  // Event listener for the next button
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  // Start the quiz when the page loads
  startQuiz();
  