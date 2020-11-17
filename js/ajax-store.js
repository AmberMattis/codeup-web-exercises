(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    function getData() {
        var requestData = $.ajax("data/inventory.json");

        requestData.done(function(data, status, jqXhr) {
            console.log(data);
            dataHTML(data);

        });

        $.ajax.fail(function(jqXr, status, error){
            console.log(jqXr);
            console.log(status);
            console.log(error);
        });
    }

    function dataHTML(inputs) {
        var inputsHTML = "";

        inputs.forEach(function(input){
            inputsHTML += "<table>";
            inputsHTML += "<tr>";
            inputsHTML += "<td>" + input.title + "</td>";
            inputsHTML += "<td>" + input.quantity + "</td>";
            inputsHTML += "<td>" + input.price + "</td>";
            inputsHTML += "<td>" + input.categories + "</td>";
            inputsHTML += "</tr>"
            inputsHTML += "</table>";


        });
        $("#insertProducts").html(inputsHTML);

    }
    $("button").click(getData);

    // TODO: Take the data from inventory.json and append it to the products table


    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();