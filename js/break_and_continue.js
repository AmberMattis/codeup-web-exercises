"use strict"


var userInput;

for(i = 1; i > 50; i++){
    if(userInput % 2 === 0 || userInput > 50){
        userInput = prompt("Enter a number");
    }else{
        break;
    }
}



