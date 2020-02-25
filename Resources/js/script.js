$(document).ready(function(){
    $('.js--scroll-to-tips').click(function(){
        $('html , body').animate({scrollTop: $('.js--section-tips').offset().top},1000);
    });
    $('.js--scroll-to-Tshirts').click(function(){
        $('html , body').animate({scrollTop: $('.js--section-Tshirts').offset().top},1000);
    })
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn')
    })
})