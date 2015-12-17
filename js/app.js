/**
 * Created by POL on 2015-12-09.
 */

// Jquery

$(document).ready(function(){
    console.log('dziala');
    var menu = $(".navbar");
    var menuOffsetFromTop = menu.position().top;

    var animate1 = $(".animate1");
    var animate2 = $(".animate2");
    var menuOffanimate1 = animate1.position().top;
    var menuOffanimate2 = animate2.position().top;

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

// JS
document.addEventListener("DOMContentLoaded", function() {
    var nameInp = document.getElementById('usrInp');
    var emailInp = document.getElementById('emailInp');
    var mesInp = document.getElementById('messInp');

    console.log(nameInp);
    console.log(emailInp);
    console.log(mesInp);

    // name check in form
    nameInp.addEventListener("blur", function(event){
        console.log('sprawdzone');
        allLetter(nameInp);
    });

    function allLetter(uname)
    {
        var letters = /^[A-Za-z]+$/;
        var hasName = document.getElementById('hasName');
        if(uname.value.match(letters))
        {
            hasName.className = "has-success";
            console.log('wow poprawne dane');
            return true;
        }
        else
        {
            hasName.className = "has-error";
            //uname.focus();
            return false;
        }
    }

    // email check in form
    emailInp.addEventListener("blur", function(event){
        console.log('sprawdzony email');
        allEmail(emailInp);
    });

    function allEmail(emailInp)
    {
        var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        var hasEmail = document.getElementById('hasEmail');
        if(emailInp.value.match(email))
        {
            hasEmail.className = "has-success";
            console.log('wow poprawne dane');
            return true;
        }
        else
        {
            hasEmail.className = "has-error";
            //emailInp.focus();
            return false;
        }
    }

    //
    
});