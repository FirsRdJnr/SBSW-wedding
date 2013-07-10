$(document).ready(function() {

    redrawDotNav();

    /* Scroll event handler */
    $(window).bind('scroll',function(e){
        parallaxScroll();
        redrawDotNav();
    });

    /* Next/prev and primary nav btn click handlers */
    $('a.bridegroom').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.wedding').click(function(){
        $('html, body').animate({
            scrollTop:1500
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.evening').click(function(){
        $('html, body').animate({
            scrollTop:3000
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.rsvp').click(function(){
        $('html, body').animate({
            scrollTop:4500
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.photos').click(function(){
        $('html, body').animate({
            scrollTop:6000
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('a.wishes').click(function(){
        $('html, body').animate({
            scrollTop:7500
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });

});

/* Scroll the background layers */
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#content').css('left',(0-(scrolled*.9))+'px');
    $('#parallax-bg1').css('left',(0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('left',(0-(scrolled*.5))+'px');
    $('#parallax-bg3').css('left',(0-(scrolled*.9))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
    var section1Top =  0;
    // The top of each section is offset by half the distance to the previous section.
    var section2Top =  $('#wedding').offset().left + 1000;
    var section3Top =  $('#evening').offset().left +3000;
    var section4Top =  $('#rsvp').offset().left +4000;
    var section5Top =  $('#photos').offset().left + 1000;
    var section6Top =  $('#wishes').offset().left +3000;

    $('nav.primary a').removeClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('nav.primary a.bridegroom').addClass('active');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('nav.primary a.wedding').addClass('active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('nav.primary a.evening').addClass('active');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
        $('nav.primary a.rsvp').addClass('active')
    } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
        $('nav.primary a.photos').addClass('active');
    } else if ($(document).scrollTop() >= section6Top){
        $('nav.primary a.wishes').addClass('active');
    }

}
