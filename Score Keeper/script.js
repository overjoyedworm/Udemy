var p1 = document.querySelector("#P1");
var p2 = document.querySelector("#P2");
var resetGame = document.querySelector("#Reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


//Player 1
p1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;    
    }
    
});

//Player 2
p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner")
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

//Reset
resetGame.addEventListener("click", function(){
    reset()
});

//Input
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;  
    winningScore = Number(this.value);
    reset();
})

//Global Functions
//Reset Function
function reset() {
    gameOver =  false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}