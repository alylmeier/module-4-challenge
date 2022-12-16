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

var quizFinished = true

var currentQuestion = 0;
var score = 0;

var quesOne = ["Which of the following is not a commonly part of the webpage code?"]
/*var questions = [
    {
        question: "Which of the following is not a commonly part of the webpage code?",
            answers: [
                {optionA:"HTML", answer:true},
                {optionB:"Microsoft Edge", answer:false},
                {optionC:"CSS", answer:true},
                {optionD:"Javascript", answer:true},
            ]
        }

    {
        question: "This is filler 2?",
            answers: [
                {optionA:"HA", answer:true},
                {optionB:"MA", answer:false},
                {optionC:"A", answer:true},
                {optionD:"JA", answer:true},
            ]
        }
    {
        question: "This is filler 3?",
        answers: [
            {optionA:"HA", answer:true},
            {optionB:"MA", answer:false},
            {optionC:"A", answer:true},
            {optionD:"JA", answer:true},
            ]
        }
    {    
        question: "This is filler 4?",
            answers: [
                {optionA:"HA", answer:true},
                {optionB:"MA", answer:false},
                {optionC:"A", answer:true},
                {optionD:"JA", answer:true},
            ]
        }
    {                
        question: "This is filler 5?",
            answers: [
                {optionA:"HA", answer:true},
                {optionB:"MA", answer:false},
                {optionC:"A", answer:true},
                {optionD:"JA", answer:true},
            ]
        }
                    

    
]*/

function quiz(){
    //currentQuestion = 0;
    //current.textContent= "quesOne"; 
    //document.getElementById("#now").textContent= quesOne
    current.textContent="Which of the following is not a commonly part of the webpage code?";

    
console.log(quesOne) 

    

  //  var myNewString = myString.replace("String", "World");

}

function quizOver(){
    window.alert("time is up")

}

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
//var mainEl = document.getElementById("main");

var secondsLeft = 30;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
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






start.addEventListener("click", quiz);
start.addEventListener("click", setTime);


