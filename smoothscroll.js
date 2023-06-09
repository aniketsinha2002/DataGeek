$('nav ul li a').click(function(){
    var thisSection=$(this).attr('href');
     $('html, body').stop().animate({
    scrollTop:$(thisSection).offset().top-140
    },600,'easeOutCirc');
});