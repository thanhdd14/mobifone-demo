//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-close").toggleClass("active");
    $(".header-nav").toggleClass('active');
});

$('.header-close').on('click', function(){
    $(this).removeClass("active");
    $(".js-mobile").removeClass("js-mobile--close");
    $("html").removeClass("js-locked");
    $(".header-nav").removeClass('active');
});


$('.js-open-search').on('click', function(){
    $("html").addClass("js-locked");
    $(".header-search").addClass("active");
});

$('.js-close').on('click', function(){
    $("html").removeClass("js-locked");
    $(".header-search").removeClass("active");
});

$('.header-nav__menu-sub').on('click', function(){
    $(this).toggleClass("active");
    $(this).parent('li').toggleClass('active');
    $(this).next(".header-nav__menu-submenu").slideToggle();
});





//matchHeight
jQuery(function ($) {
    $('.product-list .product-list__item .product-list__box .product-list__feature').matchHeight();
});


