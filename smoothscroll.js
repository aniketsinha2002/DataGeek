$('nav ul li a').click(function(){
    var thisSection = $(this).attr('href');
    var headerHeight = $('.fixed-header').outerHeight(); // Replace '.fixed-header' with selector of your fixed header.
    var scrollOffset = headerHeight || 0; // Use the header height as the offset, or set it to 0 if there's no fixed header.

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - scrollOffset
    }, 600, 'easeOutCirc');
});
