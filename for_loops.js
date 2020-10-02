"use strict"
// For Loops

function showMultiplication(x) {
    for (x = 1; x < 11; x++) {
        console.log("7 * " + x + " = " + x * 7)
    }
}

var i = 1;
 for(i = 1; i <= 10; i++){
     var x = Math.floor(Math.random() * 181) + 20;
     if(x % 2 === 0){
         console.log(x + " is Even");
     } else {
         console.log(x + " is Odd");
     }
}
for( i = 105; i > 5; i){
    console.log(i -= 5);
}

