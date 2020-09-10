/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var  scores=[0,0];
var roundScore=0;
var activePlayer=0;
var gamePlaying=true;
var previousDice=0;
var winningPoint=10;

var x=document.querySelector("#current-"+activePlayer).textContent;
console.log(x);
document.getElementById('score-0').textContent=roundScore;
document.getElementById('score-1').textContent=roundScore;
document.getElementById('current-0').textContent=roundScore;
document.getElementById('current-1').textContent=roundScore;

document.querySelector(".dice").style.display="none";


//New game
document.querySelector('.btn-new').addEventListener('click',newGame)
function newGame(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    document.getElementById('score-0').textContent=scores[0];
    document.getElementById('score-1').textContent=scores[1];
    document.getElementById('current-0').textContent=roundScore;
    document.getElementById('current-1').textContent=roundScore
    document.querySelector(".dice").style.display="none";
    document.querySelector('#name-'+0).textContent='Ruxin';
    document.querySelector('#name-'+1).textContent='Zhongyi';
    
    document.queryCommandEnabled('name-'+activePlayer).classList.remove('winner');
    document.queryCommandEnabled('name-'+activePlayer===1 ? 0 :1).classList.remove('winner');
    document.querySelector('.player-'+1+'-panel').classList.remove('active');
    document.querySelector('.player-'+2+'-panel').classList.remove('active');
}



//Roll the dice when clicking on
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){
var dice=Math.floor(Math.random()*6)+1;
   
    var diceDom=document.querySelector(".dice");
    var scoreDom=document.querySelector('#score-' + activePlayer);
    var currentScore=document.querySelector('#current-' + activePlayer);
    //display the dice
   diceDom.style.display="block";
   diceDom.src='dice-'+dice+'.png';
    //update the score when the value is not 1;
    if(!(dice == previousDice)){
        roundScore += dice
        currentScore.textContent = roundScore;
        
        if(scores[activePlayer]+roundScore>winningPoint){
            //set gamePlaying
            gamePlaying=false;
            //display scores
            scores[activePlayer]+=roundScore;
            scoreDom.textContent=scores[activePlayer];
            //Show winner
            document.querySelector('#name-'+activePlayer).textContent='Winner !';
    
    //block dice
            document.querySelector('.dice').style.display='none';
            //store the dice                
            
        }
        previousDice=dice;}
        
    else{
        //set round score to 0
        roundScore=0;
        nextPlayer();
        
    }
    
}});
//Hold to change the player side
document.querySelector('.btn-hold').addEventListener('click',nextPlayer);
function nextPlayer(){
    if(gamePlaying){
    //add round score to total score
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    //set round score to zero
    roundScore=0;
    document.querySelector('#current-' + activePlayer).textContent=roundScore;
     //switch player active status
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    document.querySelector('.player-'+(activePlayer===1 ? 0 :1)+'-panel').classList.toggle('active');
    //switch activeplayer
    activePlayer === 1 ? activePlayer=0 : activePlayer=1;}
    
}
document.querySelector('.btn-submit').addEventListener('click',setWiningPoint);
function setWiningPoint(){
    
    winningPoint=document.getElementById('myNumber').value;
    
}                    
                                                       
                                                    


