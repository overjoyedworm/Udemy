var numSquares = 6;
var colors = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode")

init();

// simplified functions
function init(){
    //mode buttons event listener
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            //if --this-----------then-this-----otherwise-
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
    for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of click square
            var clickedColor = this.style.backgroundColor;                         
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }          
        });
    }  
    reset();
};

resetBtn.addEventListener("click", function(){
    reset();
});

function reset(){
    // generate all new colors
    colors = generateRandomColor(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor; 
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];
           }else{
            squares[i].style.display = "none";
        }
    }
    //clear styling of site
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++)
    //change each color to match given color
        squares[i].style.backgroundColor = color;
}

function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() *colors.length);
    //return color from array
    return colors[random];
}

function generateRandomColor(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;   
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return "rgb"
    return "rgb(" + r + ", " + g + ", " + b + ")"
}