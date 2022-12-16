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

/*function countdown() {
    var timeLeft = 30;
    var timerEl = document.getElementById('#timer')
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        quizOver();
      }
    }, 1000);
  }*/





start.addEventListener("click", quiz);


