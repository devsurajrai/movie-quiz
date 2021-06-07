var readlineSync= require('readline-sync')

var userName=readlineSync.question("May I Know Your Good Name Please? ");
console.log(" ")

console.log('Welcome ' + userName + " Let's see how well you know \'SURAJ RAI\'");

console.log("Here We Go !");
console.log(" ");


var score=0;
var correctAnswer=0;
var usernameAndScore=[
  {
    playerName:"ShubhamPal",
    points:"4"
  }
]

var questionAnswers=[

   {
    question:"What is my nick name?",
    answer: "Churan"
   },

   {
    question:"What is my age?",
    answer: "23"
   },

   {
    question:"Do I like rafting?",
    answer: "Yes"
   },

   {
    question:"What is my favourite street food?",
    answer: "Chilli Potato"
   },

   {
    question:"Which is my favourite chocolate?",
    answer: "Dark Chocolate"
   }

]

for (var i=0;i<questionAnswers.length;i++){

    console.log(questionAnswers[i].question);
    var userAnswer=readlineSync.question("Answer: ");

    if(questionAnswers[i].answer.toUpperCase()===userAnswer.toUpperCase())
    {
         console.log("You are right!");
         score++;
         correctAnswer++;
         console.log(" ");
    }

    else{
         console.log("You are Wrong");
         score--;
         console.log(" ");
     }
}

console.log("Thank You ! You gave " + correctAnswer + " Out Of " + questionAnswers.length+ " Right Answers "+ ". Your Score is " + score)
console.log(" ")

console.log("The high score is " + usernameAndScore[0].points + " Scored by " + usernameAndScore[0].playerName)
console.log(" ")

console.log("Please send the screenshot if you have beaten the high score !")

 