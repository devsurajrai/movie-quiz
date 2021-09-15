
var readlineSync= require('readline-sync')
const chalk = require('chalk')

console.log("WELCOME TO THE MOVIE QUIZ !")
console.log(" ")

console.log(chalk.cyan(" This is Level One : Hollywood Movies"))
console.log(" ")

console.log(chalk.greenBright.bold("Let's get into it ! Please remember that you will be getting 1 point for each correct answer and 1 pint will be deducted for every wrong one."))
console.log(" ")

console.log(chalk.greenBright.bold("This game consist of 2 Levels. You will have 5 questions in Level 1 and level 2 also have the same number of questions."))
console.log(" ")

var score=0
var numberOfCorrectAnswers=0
var highestScore=0
var index=0;

if(readlineSync.keyInYN("Are you ready for the movie quiz??"))
{   console.log(" ")
    var playerName=readlineSync.question(chalk.cyan("Please enter your name: "))
    console.log(" ")
   while(playerName==""){
     var playerName=readlineSync.question(chalk.cyan("Please enter your name: "))
   }

    console.log(chalk.cyan("Welcome! "+ playerName+ " Here are your questions: \n"))

    var questionList=[
      {
         question:"What are the dying words of Charles Foster Kane in Citizen Kane? \n Answer:",
         answer:"Rosebud"
      },

      {
         question:"What 1927 musical was the first “talkie”? \n Answer:",
         answer:"The Jazz Singer"

      },

      {
         question:"Who played Mrs. Robinson in The Graduate? \n Answer:",
         answer:"Anne Bancroft",
      },

      {
        question:"What was the first feature-length animated movie ever released? \n Answer:",
        answer:"Snow White and the Seven Dwarfs"
      },

      {
       question:"In The Matrix, does Neo take the blue pill or the red pill? \n Answer:",
       answer:"Red"
      }
]

var questionListLevelTwo=[
      {
        question:"Sholay's popular Dialogue was: Kutte kamine, main tera________pi jaunga. \n Answer: ",
        answer:"Khoon"
      },

      {
        question:'Which actor played the character"Babu Moshai" in Anand? \n Answer:',
        answer:"Rajesh Khanna"
      },

      {
        question: 'Rajkumar popular dialogue in the movie Pakiza: "Apne______zamin pe mat rakhna, maile ho jayenge" \n Answer:',
        answer:"Pair"
      },

      {
        question:"What was the name of Waheeda Rehman's character in Guide? \n Answer:",
        answer:"Rosy"
      },

      {
        question:'Who played "Anarkali" in Mughal-e-Azam? \n Answer:',
        answer:"Madhubala"
      }
]

var playersScoreRecord=[
      {
       player:"Shubham Pal",
        userPoint: 8,
      },

      {
        player:"Gaurav Pandey",
        userPoint: 7,
      },

      {
       player:"Rishu Pal",
        userPoint: 5,
      },

      {
        player:"Ankit Pandey",
        userPoint: 2,
      }
]


function answerEvaluation(userAnswer,answer)
{     
      if(userAnswer.toUpperCase()==answer.toUpperCase())
      {
          console.log(chalk.greenBright("You are Correct!"))
          score++
          numberOfCorrectAnswers++;
      }

      else
     {
           console.log(chalk.red("Oops! You are Wrong."))
            score--
      }
}

console.log(" ")

for(var i=0;i<questionList.length;i++)
{
    var userAnswer=readlineSync.question(chalk.magenta(questionList[i].question))
    console.log(" ")
    answerEvaluation(userAnswer,questionList[i].answer)
    console.log(" ")
}


 for(var i=0;i<playersScoreRecord.length;i++)
  {
        if(playersScoreRecord[i].userPoint>highestScore)
        {
            highestScore=playersScoreRecord[i].userPoint;
            index=i
        }
  }

if(score>=questionList.length-1)
{
     console.log(chalk.greenBright("Congratulations! "+ chalk.blue(playerName))+" Now you are promoted to level 2")
     console.log(" ")

     var levelTwoConfirmation=readlineSync.question("Do you want to continue? 'Y' or 'N' \n")

    if(levelTwoConfirmation.toLowerCase()=="y" || levelTwoConfirmation.toLowerCase()=="yes")
    {
      
         console.clear()
  
         console.log(chalk.cyan(" This is Level Two : Bollywood Classic Movies\n"))
         console.log(" ")

         console.log(chalk.greenBright.bold("Let's jump into it.\n"))
         console.log(" ")

         for(var i=0; i<questionListLevelTwo.length; i++)
         {
             var userAnswer=readlineSync.question(chalk.magenta(questionListLevelTwo[i].question))
             console.log(" ")
             answerEvaluation(userAnswer,questionListLevelTwo[i].answer)
             console.log(" ")
          }
  

          for(var i=0;i<playersScoreRecord.length;i++)
         {
             if(playersScoreRecord[i].userPoint>highestScore)
            {
               highestScore=playersScoreRecord[i].userPoint;
               index=i
            }
          }

        console.log(chalk.yellow("Thank You ! You gave " + numberOfCorrectAnswers + " Out Of " + (questionListLevelTwo.length+questionList.length)+ " Right Answers "+ "Your Score is " + score))
        console.log(" ")


        if(score>highestScore)
       {
           console.log("you've beten up the high score. Please send the screenshot to update the database.\n")
       }

       else
       {
          console.log(chalk.cyan("The highest score is " +highestScore+" Scored by "+ playersScoreRecord[index].player+"\n"))
       }

    }

else
{
      console.log(chalk.yellow("Thank You ! You gave " + numberOfCorrectAnswers + " Out Of " + questionList.length + " Right Answers "+ ". Your Score is " + score))
      console.log(" ")

      if(score>highestScore)
      {
          console.log(chalk.greenBright("Congratulations! "+ chalk.blue(playerName)))
          console.log(chalk.magentaBright("You have beaten the high score. Please send the screenshot to update the database \n"));
      }


      else
      {
          console.log(chalk.cyan("The highest score is " +highestScore+" Scored by "+ playersScoreRecord[index].player+ "\n"))
      }
      
} 

}

else{
console.log(chalk.yellow("Thank You ! You gave " + numberOfCorrectAnswers + " Out Of " + questionList.length + " Right Answers "+ ". Your Score is " + score))
console.log(" ")

if(score>highestScore){
  console.log(chalk.greenBright("Congratulations! "+ chalk.blue(playerName)))
  console.log(chalk.magentaBright("You have beaten the highest score. Please send the screenshot to record your score in database" + "\n"));
}


else{
  console.log(chalk.cyan("The highest score is " +highestScore+" Scored by "+ playersScoreRecord[index].player+"\n"))
}
}
}

else{
  console.log(" ")
  console.log("Thank You ! The game is exiting.\n")
}

