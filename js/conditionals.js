(function() {

    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */


    function analyzeColor(color){
         if(color === "blue") {
             return "blue is the color of the sky"
         }else if(color === "red"){
             return "strawberries are red."
         }else if(color === "cyan"){
             return "I don't know anything about cyan"
         }else{
             return "I didn't ask for this color"
         }
     }
    console.log(analyzeColor("green"));                                         
    console.log(analyzeColor("purple"));
    console.log(analyzeColor("red"));
    console.log(analyzeColor("blue"));

  })();