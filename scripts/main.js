$(document).ready(function(){

//sticky menu
$(".js-sticky-menu").waypoint(function(direction){
    if(direction=="down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
});

//active menu item
$(function() {
    $( 'ul.main-nav li' ).on( 'click', function() {
          $( this ).parent().find( 'li.active' ).removeClass( 'active' );
          $( this ).addClass( 'active' );
    });
});


//mixitup(portfolio section)
var mixer=mixitup('.container');



});


function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}


