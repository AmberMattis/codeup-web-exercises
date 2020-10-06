(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString)

    var planetsArray = planetsString.split(',');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsString = "Mercury \nVenus \nEarth \nMars \nJupiter \nSaturn \nUranus \nNeptune";   //This might be useful because it would be easier to read especially if you have a really long string.

    console.log(planetsString);


    Creating an unordered list
    var ul = document.createElement("ul");
    ul.innerHTML = "<li>Mercury<l/i><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li>";
    document.body.appendChild(ul);



})();
