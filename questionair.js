var question1,question2,question3;
var answers1,answers2,answers3;
question1='What is your favorite color?';
question2='What is your hometown?';
question3='What college did you go?';
answers1='0:blue\n1:green\n2:yellow';
answers2='0:Wuhan\n1:Xiangyang\n2:Beijing';
answers3='0:Beijing University\n1:College of William and Mary\n2:Wuhan University';
var questions=[],answers=[],rightAnswer=[];
function Question(question,answer,rightanswer){
    questions.push(question);
    answers.push(answer);
    rightAnswer.push(rightanswer);
    
}
Question(question1,answers1,0);
Question(question2,answers2,1);
Question(question3,answers3,2);

var randomQuestion=Math.floor(Math.random()*2);

function showOneQuestion(questionNumber){
    console.log(questions[questionNumber]);
    console.log(answers[questionNumber]);
    var choice=prompt("Please enteryour answer:");
    return function(choice){
        if(choice==rightAnswer[questionNumber]){
            console.log('Right answer!');}
     else{
                console.log('Wrong answer!');
            }
        }
    }


showOneQuestion(randomQuestion);