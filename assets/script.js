//var quesOne = document.getElementById('#q1')
//var quesTwo = document.getElementById('#q2')
//var quesThree = document.getElementById('#q3')
//var quesFour = document.getElementById('#q4')
//var quesFive = document.getElementById('#q5')
var current = document.getElementById("#qtext")

var btnA = document.getElementById('A')
var btnB = document.getElementById('B')
var btnC = document.getElementById('C')
var btnD = document.getElementById('D')
let quizContainer=document.getElementById("now")
var quizFinished = true
var secondsLeft = 30;

var currentQuestion = 0;
var score = 0;

//var quesOne = ["Which of the following is not a commonly part of the webpage code?"]
var questions = [
    {
        question: "Which of the following is not a commonly part of the webpage code?",
        choices: ["HTML", "Microsoft Edge", "CSS", "Javascript"],
        answer: "Microsoft Edge"
    },

    {
        question: "This is filler 2?",
        choices: ["HA", "MA", "A", "JA"],
        answer: "A"  
    },
    {
        question: "This is filler 3?",
        choices: ["HA", "MA", "A", "JA"],
        answer: "MA"
      
    },
]

function quiz() {
    quizContainer.innerHTML=""
   let question=questions[currentQuestion]
//    Getting the values from an object using a . (dot) notations
    // question = {
    //     question: "Which of the following is not a commonly part of the webpage code?",
    //     choices: ["HTML", "Microsoft Edge", "CSS", "Javascript"],
    //     answer: "Microsoft Edge"
    // }
   let questionDiv=document.createElement("div")
   questionDiv.setAttribute("id","qtext")
   questionDiv.innerHTML=question.question

   let answerDiv=document.createElement("div")
   answerDiv.setAttribute("id", "answers")
    for(let i=0;i<question.choices.length;i++){

        let btnEl=document.createElement("button")

        btnEl.setAttribute("class", "btn")
        btnEl.innerHTML=question.choices[i]

        btnEl.addEventListener('click', function(event){
            event.preventDefault()
            console.log(event.target.innerHTML)
            if(event.target.innerHTML===question.answer){
                alert("Correct")
                score=score+10;
                console.log(score)
                currentQuestion=currentQuestion+1;
                quiz()
            }
            else{
                alert("Incorrect Answer")
                secondsLeft=secondsLeft-5
                currentQuestion=currentQuestion+1;
                quiz()
            
                
            }
        })
        answerDiv.append(btnEl)
    }
    quizContainer.append(questionDiv,answerDiv)
}

function quizOver() {
    window.alert("time is up")

}

// Selects element by class
var timeEl = document.querySelector(".timeEl");

// Selects element by id
//var mainEl = document.getElementById("main");



function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}
function sendMessage() {
    timeEl.textContent = "All done!"
}
function init() {
    setTime()
    quiz()

}





start.addEventListener("click", init);



