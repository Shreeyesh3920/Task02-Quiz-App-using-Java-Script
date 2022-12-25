const quizData = [
    {
      question: "Q1.Javascript is an _______ language?",
      a: "Object-Oriented",
      b: "Object-Based",
      c: "Procedural",
      d:"None of the above",
      correct:"a"
    },
    {
      question: "Q2. Which of the following is not javascript data types?",
      a: "Null type",
      b: "Undefined type",
      c: "Number type",
      d:"All of the mentioned",
      correct:"d"
    },
    {
      question: "Q3. Where is Client-side JavaScript code is embedded within HTML documents?",
      a: "A URL that uses the special javascript:code",
      b: "A URL that uses the special javascript:protocol",
      c: "A URL that uses the special javascript:encoding",
      d:"A URL that uses the special javascript:stack",
      correct:"b"
    },
    {
      question: "Q4.Which of the following scoping type does JavaScript use?",
      a: "Sequential",
      b: "Segmental",
      c: "Lexical",
      d:"Literal",
      correct:"c"
    },
    {
      question: "Q5.Which of the following is not an error in JavaScript?",
      a: "Missing of Bracket",
      b: "Division by zero",
      c: "Syntax error",
      d:"Missing of semicolons",
      correct:"b"
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz(){
  deselectAnser()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question

  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAnser(){
  answerEls.forEach(answerEl=>{
    answerEl.checked = false
  })
}

function getSeleted(){
  let answer
  answerEls.forEach(answerEl=>{
    if(answerEl.checked){
    answer = answerEl.id
    }
  })
  return answer;
}


submitBtn.addEventListener('click', ()=>{
  const answer = getSeleted()
  if(answer===quizData[currentQuiz].correct){
    score++
  }
  currentQuiz++
  if(currentQuiz < quizData.length){
    loadQuiz()
  }else{
    quiz.innerHTML = `
    <h2>Your Scored ${score}
    /${quizData.length} Questions correctly</h2>
    <button onclick="location.reload()">Reload</button>
    `
  }
})






