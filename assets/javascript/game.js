
    
//I have tried several methods for this multiplayer game. This is my fourth kind. I have seen games with alert method. But I wanted to do it this way where two players can put values in the text field and the output the result. One common problem I faced was comparing two players values. 

//Here my logic is to let the user input three values, rock, paper, scissor. That input will then be accessed using a loop to compare player 1 and player 2's values to return something like 'it's a tie'.  

//but again I am faced with the same issue of comparison. How can I connect two players values and compare when I have already created a function to get their input values. May be a global player variable with an empty string. 


var choice = ['rock', 'paper', 'scissor'];




function player1 () {
    
 var x = document.getElementById('textPlayer').value;
    console.log(x);
   x.reset;
    
   

};

player1();

function player2 () {

    var y = document.getElementById('player2').value;
    document.getElementById('display2').innerHTML = y;
}

player2();