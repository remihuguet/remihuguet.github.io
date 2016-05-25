$(document).ready(function() {
	var displayNavHeight = 2 * $(window).height() / 3;
	var shown = false;
    var previousScroll = 0;
    var navbar = document.getElementById('navbar'),
    navClasses = navbar.classList; // classList doesn't work <IE10

    $(window).bind('scroll', function() {
        var currentScroll = window.scrollY;
        var isDown = currentScroll > previousScroll;

       if ( isDown && !navClasses.contains('scrolled') ){
          // scrolling down, didn't add class yet
          navClasses.add('slideOutUp'); // we hide the navbar
          //document.getElementById('gototop').classList.add('fadeOut');
       } else if ( !isDown ){
          // scrolling up
          navClasses.remove('slideOutUp'); // won't error if no class found
          navClasses.add('slideInDown'); // won't error if no class found
          //document.getElementById('gototop').classList.remove('fadeOut');
          //document.getElementById('gototop').classList.add('fadeIn');
       }

       // always update position
       previousScroll = currentScroll;
    });
});
