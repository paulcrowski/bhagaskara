/**
 * Created by POL on 2015-12-09.
 */


$(document).ready(function(){

    //sticky menu JQ
    function stickyMenu () {
        console.log('dziala');
        var menu = $(".navbar");
        var menuOffsetFromTop = menu.position().top;

        var animate1 = $(".animate1");
        var animate2 = $(".animate2");
        var menuOffanimate1 = animate1.position().top;
        var menuOffanimate2 = animate2.position().top;

        $(window).on("scroll", function (event) {
            //console.log($(window).scrollTop());
            //console.log(menu.position());
            if ($(window).scrollTop() > menuOffsetFromTop) {
                menu.addClass("navbar-fixed-top");
            }
            else {
                menu.removeClass("navbar-fixed-top");
            }
        });
    }

    // slider JQ
    function slider(numberPhotos) {
        console.log('dziala slider');
        var arrowLeft = $('.arrow-left'); // strzalka lewa
        var arrowRight = $('.arrow-right'); // strzalka prawa
        var sliderPhoto = $('#sliderPhoto'); // fotka
        var number = 0; // zmienna pomocnicza
        var newsTab = ["ego praca została doceniona i w 1819 podpisał kontrakt z Departamentem",
            "to jest bardzo wazne by moc fajnei tworzyc strony","te teksty latwo zmienic w js"];
        var newsHtml = $('#news');

        arrowLeft.click(function() {
            console.log( "klikneles lewa strzalke" );
            if (number === 0) {
                sliderPhoto.hide();
                number = numberPhotos;
                sliderPhoto.attr("src", "images/" + number + ".jpg");
                sliderPhoto.fadeIn(400);
                console.log(newsTab[number]);
                news.innerHTML = newsTab[number];
            }
            else {
                sliderPhoto.hide();
                number--;
                sliderPhoto.attr("src", "images/" + number + ".jpg");
                sliderPhoto.fadeIn(400);
                console.log(newsTab[number]);
                news.innerHTML = newsTab[number];
            }
        });
        arrowRight.click(function() {
            console.log( "klikneles prawa strzalke" );
            if (number === numberPhotos) {
                sliderPhoto.hide();
                number = 0;
                sliderPhoto.attr("src", "images/" + number + ".jpg");
                sliderPhoto.fadeIn(400);
                news.innerHTML = newsTab[number];
            } else {
                sliderPhoto.hide();
                number++;
                sliderPhoto.attr("src", "images/" + number + ".jpg");
                sliderPhoto.fadeIn(400);
                news.innerHTML = newsTab[number];
            }
        })
    }

    // form validator JS

    function validator () {
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

        // mess check no to be empty
        mesInp.addEventListener("blur", function(event){
            console.log('sprawdzony email');
            if (mesInp.value=="") {
                hasMes.className = "has-error";
                return false;
            }
            else {
                hasMes.className = "has-success";
                return true;
            }
        });
    }

    // scroll top
    function scrollMe () {
        var offset=250; // when to show scroll button
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500);
            }
            else {
                $('.top').fadeOut(500);
            }
        });

        // Smooth animation when scrolling
        $('.top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0});
        })

    }

    // plugin fancy box
    $(".fancybox").fancybox();


    // ############# start me up
    stickyMenu();
    slider(2);
    validator();
    scrollMe();
});