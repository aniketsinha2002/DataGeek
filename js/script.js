$(document).bind('scroll',function(e){
    $('section').each(function(){
        if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
          window.location.hash = $(this).attr('id');
            if($(this).attr('id') == "home"){
            $('a.nav__link').removeClass('selected');
            $("#nav1").toggleClass('selected')
          } else if($(this).attr('id') == "about"){
            $('a.nav__link').removeClass('selected');
            $("#nav2").toggleClass('selected')
          } else if($(this).attr('id') == "courses"){
            $('a.nav__link').removeClass('selected');
            $("#nav3").toggleClass('selected')
          } else if($(this).attr('id') == "faqu"){
            $('a.nav__link').removeClass('selected');
            $("#nav4").toggleClass('selected')
          } else if($(this).attr('id') == "contact"){
            $('a.nav__link').removeClass('selected');
            $("#nav5").toggleClass('selected')
          }
        }
    });
});