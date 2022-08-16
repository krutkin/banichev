let $ = jQuery;

$('.photos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.subphotos',
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-prevArrow"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-nextArrow"></span></button>',
    lazyLoad: 'progressive',
});
$('.subphotos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.photos',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    lazyLoad: 'progressive',
});

$('.equipment-card#bath').on('click', function (event) {
    $('#bath-description').slideToggle();
    $('#ceiling-description').slideUp();
    $('#wall-description').slideUp();
    $('#floor-description').slideUp();
});
$('.equipment-card#ceiling').on('click', function (event) {
    $('#ceiling-description').slideToggle();
    $('#wall-description').slideUp();
    $('#floor-description').slideUp();
});
$('.equipment-card#wall').on('click', function (event) {
    $('#ceiling-description').slideUp();
    $('#wall-description').slideToggle();
    $('#floor-description').slideUp();
});
$('.equipment-card#floor').on('click', function (event) {
    $('#ceiling-description').slideUp();
    $('#wall-description').slideUp();
    $('#floor-description').slideToggle();
});