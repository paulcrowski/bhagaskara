/**
 * Created by POL on 2015-12-09.
 */

$(function() {
    console.log('dziala');

    $(document).ready(function() {
        $(window).scroll(function(){
            $('*[class^="prlx"]').each(function(r){
                var pos = $(this).offset().top;
                var scrolled = $(window).scrollTop();
                $('*[class^="prlx"]').css('top', -(scrolled * 0.5) + 'px');
            });
        });
    });
});





