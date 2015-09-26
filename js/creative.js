/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Only one panel expanded at a time
    $('.portfolio-box').on('click', function(){
        $('.collapse').collapse('hide');
    })

    // Changes arrow when collapsed/expanded
    //     $('.collapse').on('shown.bs.collapse', function(){
    //         $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    // }).on('hidden.bs.collapse', function(){
    //         $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    //     });

    // Fixes problem where first clicked expanded everything
    $('.collapse').collapse('hide');

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // For adding html file to html
    var cText = '<a href="carousel.html></a>'
    document.write(cText)

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
