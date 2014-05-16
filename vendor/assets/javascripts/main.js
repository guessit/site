/*

	EXHO TEMPLATE  V1.0 BY SUPVIEW.BE
	
	
	01. Sticky Navbar
	02. Flexslider ( testimonials )
	03. Share Button
	04. Drag-it img fade Out on Click
	05. Initialise the Carousel
	06. Form Settings
	07. MediaCheck 
	08. Animations make-it-appear
	09. VideoBackground 
	10. Load the Whole Page

*/

var ajax_form = true;

$(document).ready(function () { // Document ready



/*-----------------------------------------------------------------------------------*/
    /*	01. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/



    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();




/*-----------------------------------------------------------------------------------*/
    /*	02. FLEXSLIDER - TESTIMONIAL
/*-----------------------------------------------------------------------------------*/


    $('#slider1').flexslider({
        animation: "fade",
        directionNav: false,
        controlNav: false,
        smoothHeight: true,
        animationLoop: true,
        slideshowSpeed: 6000,
        slideToStart: 0,
    });

    $('#slider2').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: false,
        smoothHeight: true,
        animationLoop: true,
        sync: "#slider1",
        slideshowSpeed: 6000,
        slideToStart: 0,
    });




/*-----------------------------------------------------------------------------------*/
    /*	03. Share Button hover
/*-----------------------------------------------------------------------------------*/


    $(".cbp-af-header .right").hover(
        function (e) {
            $('.cbp-af-header .social-ico').fadeIn();
        }, // over
        function (e) {
            $('.cbp-af-header .social-ico').fadeOut();
        } // out
    );



/*-----------------------------------------------------------------------------------*/
    /*	04. Drag-it img fade Out on Click
/*-----------------------------------------------------------------------------------*/


    $("#dragit").click(function () {
        $("#dragit").fadeOut("slow");
    });



/*-----------------------------------------------------------------------------------*/
    /*	05. Initialise the Carousel
/*-----------------------------------------------------------------------------------*/


    $("#template-2").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        lazyLoad: true,
        paginationSpeed: 400,
        singleItem: true,
        autoHeight: false,
        transitionStyle: "fade",
    });

/*-----------------------------------------------------------------------------------*/
    /*	07. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {

            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });


        },
        exit: function () {

/*-----------------------------------------------------------------------------------*/
            /*	08. ANNIMATIONS MAKE IT APPEAR
/*-----------------------------------------------------------------------------------*/


            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).addClass('animated fadeInDown');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).addClass('animated fadeInLeft');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).addClass('animated fadeInRight');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).addClass('animated fadeInUp');
            }, {
                offset: '80%'
            });

            $('.bounce').waypoint(function (direction) {
                $(this).addClass('animated bounce');
            }, {
                offset: '70%'
            });

            $('.pulse').waypoint(function (direction) {
                $(this).addClass('animated pulse');
            }, {
                offset: '50%'
            });

/*-----------------------------------------------------------------------------------*/
            /*	09. VIDEO BACKGROUND READY
/*-----------------------------------------------------------------------------------*/


            var videobackground = new $.backgroundVideo($('.page1'), {
                "align": "centerXY",
                "width": 1280,
                "height": 720,
                "path": "http://www.baribal.be/exho/video/", /* Folder wich contain the mp4, ogg and webm video */
                "filename": "desktop",
                "types": ["mp4", "ogg", "webm"]
            });

        }


    }); /* END OF THE MEDIACHECK */


}); /* END OF Document Ready */

/*-----------------------------------------------------------------------------------*/
/*	10. Load the Whole Page
/*-----------------------------------------------------------------------------------*/



$(window).load(function () {
    // will first fade out the loading animation
    jQuery("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(600).fadeOut("slow");



});
