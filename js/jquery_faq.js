$(document).ready(function() {


     $("dd").hide();
    //  $('dt').each(function() {
    //     $(this).click(function(e) {
    //         e.preventDefault();
    //          $("dt").toggleClass("highlight")
    //          $("dd").toggleClass("invisible").slideToggle();
    //     });
    //  });


    $("#a-link").click(function (e) {
        e.preventDefault();
        $("#a-link").toggleClass("highlight")
        $("#a-def").toggleClass("invisible").slideToggle()
    });

    $("#b-link").click(function (e) {
        e.preventDefault();
        $("#b-link").toggleClass("highlight")
        $("#b-def").toggleClass("invisible").slideToggle()
    });

    $("#c-link").click(function (e) {
        e.preventDefault();
        $("#c-link").toggleClass("highlight")
        $("#c-def").toggleClass("invisible").slideToggle()
    });

    $("#d-link").click(function (e) {
        e.preventDefault();
        $("#d-link").toggleClass("highlight")
        $("#d-def").toggleClass("invisible").slideToggle()
    });

    $("#e-link").click(function (e) {
        e.preventDefault();
        $("#e-link").toggleClass("highlight")
        $("#e-def").toggleClass("invisible").slideToggle()
    });

    $("#f-link").click(function (e) {
        e.preventDefault();
        $("#f-link").toggleClass("highlight")
        $("#f-def").toggleClass("invisible").slideToggle()
    });

    $("#g-link").click(function (e) {
        e.preventDefault();
        $("#g-link").toggleClass("highlight")
        $("#g-def").toggleClass("invisible").slideToggle()
    });

    $("#h-link").click(function (e) {
        e.preventDefault();
        $("#h-link").toggleClass("highlight")
        $("#h-def").toggleClass("invisible").slideToggle()
    });


    $("#i-link").click(function (e) {
        e.preventDefault();
        $("#i-link").toggleClass("highlight")
        $("#i-def").toggleClass("invisible").slideToggle()
    });

    $("#j-link").click(function (e) {
        e.preventDefault();
        $("#j-link").toggleClass("highlight")
        $("#j-def").toggleClass("invisible").slideToggle()
    });





    $("button").click(function(e){
        $("#messier-81-galaxy").children().last().css("background-color","lightblue").css("color","black")
        $("#centaurus-a-galaxy").children().last().css("background-color","lightblue").css("color","black")
        $("#messier-82-galaxy").children().last().css("background-color","lightblue").css("color","black")

    })

    $("li").click(function(){
        $(this).parent().children().first().css("font-weight", "bold");
    })

    $("#no").click(function(){
        $(".member").slideUp();
    })




      $("ul").children().hide();

    $("#galaxy1-heading").click(function(e){
        e.preventDefault();
        $("#messier-81-galaxy").removeClass("invisible").children().slideToggle();

    })

    $("#galaxy2-heading").click(function(){
        $("#centaurus-a-galaxy").removeClass("invisible").children().slideToggle();

    })

    $("#galaxy3-heading").click(function(){
        $("#messier-82-galaxy").removeClass("invisible").children().slideToggle();

    })




        $('#exampleModal').modal('show');
});