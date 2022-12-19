
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
        question: "What is the name of the CSS API taught in Bootcamp?",
        choices: ["Bootstrap", "JQuery", "Div", "Cascading Style Sheets"],
        answer: "Bootstrap"  
    },
    {
        question: "What is the name of the JS API taught in Bootcamp?",
        choices: ["Bootstrap", "JQuery", "Div", "Cascading Style Sheets"],
        answer: "JQuery"
      
    },
    {
        question: "What is the popular phrase used in coding examples?",
        choices: ["GitLab", "GitHub", "Canvas", "Hello World"],
        answer: "Hello World"
      
    },
    {
        question: "What animal is the GitLab logo?",
        choices: ["Fox", "Bear", "Alligator", "Whale"],
        answer: "Fox"
      
    },
    {
        question: "Where are you when you try to delete a GitHub repo?",
        choices: ["Outer space", "The Danger Zone", "UConn", "Under the Sea"],
        answer: "The Danger Zone"
      
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
    window.prompt("Please enter your initials. Your score is " + score)
}
function saveScore() {
    let hsDiv=document.createElement("div");
    hsDiv.textContent("final");
    localStorage.setItem("highscores", final);
}




// Selects element by class
var timeEl = document.querySelector(".timeEl");





function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            quizOver().then(saveScore);
            
        }

    }, 1000);
}

function displayScore() {
    localStorage.getItem("hsDiv")
}



  

function init() {
    setTime()
    quiz()

}





start.addEventListener("click", init);

scores.addEventListener("click", displayScore)

