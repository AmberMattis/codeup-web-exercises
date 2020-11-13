$(document).ready(function() {

    // $('dl').children().each(function() {
    //    $(this).click(function(e) {
    //         e.preventDefault(e)
    //         $("dt").toggleClass("highlight");
    //         $("dd").toggleClass("invisible")
    //     });
    //     });

    $("dd").each(function() {
        $("dt").click(function (e) {
            e.preventDefault();
            $("dt").toggleClass("highlight")
            $("dd").toggleClass("invisible")
        })
    });

    $("#a-link").click(function (e) {
        e.preventDefault();
        $("#a-link").toggleClass("highlight")
        $("#a-def").toggleClass("invisible")
    });

    $("#b-link").click(function (e) {
        e.preventDefault();
        $("#b-link").toggleClass("highlight")
        $("#b-def").toggleClass("invisible")
    });

    $("#c-link").click(function (e) {
        e.preventDefault();
        $("#c-link").toggleClass("highlight")
        $("#c-def").toggleClass("invisible")
    });

    $("#d-link").click(function (e) {
        e.preventDefault();
        $("#d-link").toggleClass("highlight")
        $("#d-def").toggleClass("invisible")
    });

    $("#e-link").click(function (e) {
        e.preventDefault();
        $("#e-link").toggleClass("highlight")
        $("#e-def").toggleClass("invisible")
    });

    $("#f-link").click(function (e) {
        e.preventDefault();
        $("#f-link").toggleClass("highlight")
        $("#f-def").toggleClass("invisible")
    });

    $("#g-link").click(function (e) {
        e.preventDefault();
        $("#g-link").toggleClass("highlight")
        $("#g-def").toggleClass("invisible")
    });

    $("#h-link").click(function (e) {
        e.preventDefault();
        $("#h-link").toggleClass("highlight")
        $("#h-def").toggleClass("invisible")
    });


    $("#i-link").click(function (e) {
        e.preventDefault();
        $("#i-link").toggleClass("highlight")
        $("#i-def").toggleClass("invisible")
    });

    $("#j-link").click(function (e) {
        e.preventDefault();
        $("#j-link").toggleClass("highlight")
        $("#j-def").toggleClass("invisible")
    });

    $("button").click(function(e){
        $("#national-parks").children().last().css("background-color","yellow")
        $("#state-parks-texas").children().last().css("background-color","yellow")

    })

    $("li").click(function(){
        $(this).parent().children().first().css("font-weight", "bold");
    })

    $("#no").click(function(){
        $(".member").slideUp();
    })

    $("#national-parks-heading").click(function(){
        $("#national-parks").removeClass("invisible").children().slideToggle();

    })

    // $("#state-parks-texas").click(function(){
    //     $("#te")
    // })

});