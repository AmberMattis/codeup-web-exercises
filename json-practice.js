$(document).ready(function() {
    $.ajax("data/orders.json").done(function(data){
        console.log(data[0].orderNumber);
    })
})
;