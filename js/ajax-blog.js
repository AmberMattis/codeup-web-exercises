$(document).ready(function(){
    "use strict"

    function getBlogs(data) {
        var blogInfo = $.ajax("data/blog.json")

        blogInfo.done(function (data, status, jqXhr) {
            console.log(data);
            console.log(status);
            console.log(jqXhr);
            addHtml(data);
        });

        blogInfo.fail(function (data, error, status) {
            console.log(error);
            console.log(status);
        });
    };

    function addHtml(inputs) {
        var newHtml = "";

        inputs.forEach(function(input){

            newHtml += "<div class=' first'>";
            newHtml += "<h3>" + input.title + "</h3>";
            newHtml += "<p>"  + input.content + "</p>";
            newHtml += "<p>" + input.categories + "</p>";
            newHtml += "<h4>" + input.date + "</h4>";
            newHtml += "</div>";


        })

      $(".container").html(newHtml);
    }

    $(window).load(getBlogs);
})