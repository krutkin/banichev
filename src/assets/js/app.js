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
    $('#interior-decoration').hide();
    $('#bath-description').fadeIn();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('.equipment-card#ceiling').on('click', function (event) {
    $('#ceiling-description').fadeIn();
    $('#bath-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('.equipment-card#wall').on('click', function (event) {
    $('#wall-description').fadeIn();
    $('#bath-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('.equipment-card#floor').on('click', function (event) {
    $('#floor-description').fadeIn();
    $('#bath-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});

$('#close-bath-description').on('click', function (event) {
    $('#interior-decoration').fadeIn();
    $('#bath-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('#close-ceiling-description').on('click', function (event) {
    $('#bath-description').fadeIn();
    $('#ceiling-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('#close-wall-description').on('click', function (event) {
    $('#bath-description').fadeIn();
    $('#wall-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});
$('#close-floor-description').on('click', function (event) {
    $('#bath-description').fadeIn();
    $('#floor-description').hide();
    $('html, body').animate({
        scrollTop: $('.interior-decoration').offset().top
    }, 300);
});