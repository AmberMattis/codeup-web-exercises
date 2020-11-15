$(document).ready(function() {




    $(window).on('load', function(){
        $('#exampleModal').modal('show');
    });

    $("dd").hide();
     $('dt').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
             $("dt").toggleClass("highlight");
             $("dd").toggleClass("invisible").slideToggle();
        });
     });


    // $("#a-link").click(function (e) {
    //     e.preventDefault();
    //     $("#a-link").toggleClass("highlight")
    //     $("#a-def").toggleClass("invisible")
    // });
    //
    // $("#b-link").click(function (e) {
    //     e.preventDefault();
    //     $("#b-link").toggleClass("highlight")
    //     $("#b-def").toggleClass("invisible")
    // });
    //
    // $("#c-link").click(function (e) {
    //     e.preventDefault();
    //     $("#c-link").toggleClass("highlight")
    //     $("#c-def").toggleClass("invisible")
    // });
    //
    // $("#d-link").click(function (e) {
    //     e.preventDefault();
    //     $("#d-link").toggleClass("highlight")
    //     $("#d-def").toggleClass("invisible")
    // });
    //
    // $("#e-link").click(function (e) {
    //     e.preventDefault();
    //     $("#e-link").toggleClass("highlight")
    //     $("#e-def").toggleClass("invisible")
    // });
    //
    // $("#f-link").click(function (e) {
    //     e.preventDefault();
    //     $("#f-link").toggleClass("highlight")
    //     $("#f-def").toggleClass("invisible")
    // });
    //
    // $("#g-link").click(function (e) {
    //     e.preventDefault();
    //     $("#g-link").toggleClass("highlight")
    //     $("#g-def").toggleClass("invisible")
    // });
    //
    // $("#h-link").click(function (e) {
    //     e.preventDefault();
    //     $("#h-link").toggleClass("highlight")
    //     $("#h-def").toggleClass("invisible")
    // });
    //
    //
    // $("#i-link").click(function (e) {
    //     e.preventDefault();
    //     $("#i-link").toggleClass("highlight")
    //     $("#i-def").toggleClass("invisible")
    // });
    //
    // $("#j-link").click(function (e) {
    //     e.preventDefault();
    //     $("#j-link").toggleClass("highlight")
    //     $("#j-def").toggleClass("invisible")
    // });
    //




    $("button").click(function(e){
        $("#messier-81-galaxy").children().last().css("background-color","yellow")
        $("#centaurus-a-galaxy").children().last().css("background-color","yellow")
        $("#messier-82-galaxy").children().last().css("background-color","yellow")

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
        $("#messier-81-galaxy").css("visibility","visible").children().slideToggle();

    })

    $("#galaxy2-heading").click(function(){
        $("#centaurus-a-galaxy").removeClass("invisible").children().slideToggle();

    })

    $("#galaxy3-heading").click(function(){
        $("#messier-82-galaxy").removeClass("invisible").children().slideToggle();

    })

    $("#state-parks-texas").click(function(){
        $("#te")
    })

});