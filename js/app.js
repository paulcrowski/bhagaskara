/**
 * Created by POL on 2015-12-09.
 */

$(document).ready(function(){
    console.log('dziala');
    var menu = $(".navbar");
    var menuOffsetFromTop = menu.position().top;

    $(window).on("scroll", function(event){
        console.log($(window).scrollTop());
        console.log(menu.position());
        if($(window).scrollTop()> menuOffsetFromTop) {
            menu.addClass("navbar-fixed-top");
        }
        else {
            menu.removeClass("navbar-fixed-top");
        }
    });
});




