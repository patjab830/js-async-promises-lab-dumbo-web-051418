const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion() {
  document.getElementsByClassName("question-container")[0].innerHTML = questions[0].questionText
}

function askQuestionThen(time) {
  question = questions[0]
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
  return promise
}

function removeQuestion() {
  document.getElementsByClassName("question-container")[0].innerHTML = ""
}

function askQuestionThenRemoveQuestion() {
  appendQuestion()
  let ask = new Promise((resolve, reject) => setTimeout(removeQuestion, 10000))
  return ask
}

function trueAndFalseButtons() {
  let buttons = [document.querySelector(".green"), document.querySelector(".red")]
  return buttons
}

function toggleTrueAndFalseButtons() {
  const buttons = trueAndFalseButtons()
  for ( const button of trueAndFalseButtons()) {
    button.classList.contains("hide") ? button.classList.remove("hide") : button.classList.add("hide")
  }
}

function displayQuestionOnClick() {
  for ( const button of trueAndFalseButtons()) {
    button.addEventListener('click', askQuestionThen)
  }
}
