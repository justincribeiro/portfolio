$( document ).ready(function() {
    //Smooth scroll
    $(window).scroll()

    $('.scroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 750);
        return false;
    });

    //only activate stellar for window widths above or equal to 800
    var stellarActivated = false;

    $(window).resize(function() {
        react_to_window();
    });

    function react_to_window() {
        if ($(window).width() <= 960) {
            if (stellarActivated == true) {
                $(window).data('plugin_stellar').destroy();
                stellarActivated = false;
            }
        } else {
            if (stellarActivated == false) {

                $.stellar({
                   horizontalScrolling: false
               });

                $(window).data('plugin_stellar').init();
                stellarActivated = true;
            }
        }
    }

});





