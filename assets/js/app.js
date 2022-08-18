/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var $ = jQuery;
$('.main-photos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  asNavFor: '.main-subphotos',
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-prevArrow"></span></button>',
  nextArrow: '<button type="button" class="slick-next"><span class="icon icon-nextArrow"></span></button>',
  lazyLoad: 'proggressive'
});
$('.main-subphotos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.main-photos',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  lazyLoad: 'proggressive'
});
$('.equipment-photos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-prevArrow"></span></button>',
  nextArrow: '<button type="button" class="slick-next"><span class="icon icon-nextArrow"></span></button>',
  lazyLoad: 'proggressive'
});
lightbox.option({
  'disableScrolling': true,
  'alwaysShowNavOnTouchDevices': true
});
$('.equipment-card').on('click', function (event) {
  var cardID = $(this).attr('id');
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
  $(this).closest('.equipment-block').hide();
  $("#".concat(cardID, "-description")).fadeIn();
  $('html, body').animate({
    scrollTop: $(this).closest('.equipment-row').offset().top
  }, 300);
});
$('#close-frame-description').on('click', function (event) {
  $('#base').fadeIn();
  $('#frame-description').hide();
});
$('#close-frame-options-description').on('click', function (event) {
  $('#base').fadeIn();
  $('#frame-options-description').hide();
});
$('#close-option-1-description').on('click', function (event) {
  $('#frame-options-description').fadeIn();
  $('#option-1-description').hide();
});
$('#close-option-2-description').on('click', function (event) {
  $('#frame-options-description').fadeIn();
  $('#option-2-description').hide();
});
$('#close-option-3-description').on('click', function (event) {
  $('#frame-options-description').fadeIn();
  $('#option-3-description').hide();
});
$('#close-option-4-description').on('click', function (event) {
  $('#frame-options-description').fadeIn();
  $('#option-4-description').hide();
});
$('#close-metall-description').on('click', function (event) {
  $('#exterior').fadeIn();
  $('#metall-description').hide();
});
$('#close-wood-description').on('click', function (event) {
  $('#exterior').fadeIn();
  $('#wood-description').hide();
});
$('#close-decor-elements-description').on('click', function (event) {
  $('#exterior').fadeIn();
  $('#decor-elements-description').hide();
});
$('#close-luster-description').on('click', function (event) {
  $('#decor-elements-description').fadeIn();
  $('#luster-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-window-description').on('click', function (event) {
  $('#decor-elements-description').fadeIn();
  $('#window-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-carpet-description').on('click', function (event) {
  $('#decor-elements-description').fadeIn();
  $('#carpet-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-bath-description').on('click', function (event) {
  $('#interior-decoration').fadeIn();
  $('#bath-description').hide();
});
$('#close-restroom-description').on('click', function (event) {
  $('#interior-decoration').fadeIn();
  $('#restroom-description').hide();
});
$('#close-ceiling-description').on('click', function (event) {
  $('#bath-description').fadeIn();
  $('#ceiling-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-wall-description').on('click', function (event) {
  $('#bath-description').fadeIn();
  $('#wall-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-plinth-description').on('click', function (event) {
  $('#wall-description').fadeIn();
  $('#plinth-description').hide();
});
$('#close-cornice-description').on('click', function (event) {
  $('#wall-description').fadeIn();
  $('#cornice-description').hide();
});
$('#close-windowFrames-description').on('click', function (event) {
  $('#wall-description').fadeIn();
  $('#windowFrames-description').hide();
});
$('#close-architraves-description').on('click', function (event) {
  $('#wall-description').fadeIn();
  $('#architraves-description').hide();
});
$('#close-floor-description').on('click', function (event) {
  $('#bath-description').fadeIn();
  $('#floor-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-furnace-description').on('click', function (event) {
  $('#mainThing').fadeIn();
  $('#furnace-description').hide();
});
$('#close-waterPipes-description').on('click', function (event) {
  $('#mainThing').fadeIn();
  $('#waterPipes-description').hide();
});
$('#close-electrician-description').on('click', function (event) {
  $('#mainThing').fadeIn();
  $('#electrician-description').hide();
});
$('#close-furniture-description').on('click', function (event) {
  $('#decoration').fadeIn();
  $('#furniture-description').hide();
});
$('#close-table-description').on('click', function (event) {
  $('#furniture-description').fadeIn();
  $('#table-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-bench-description').on('click', function (event) {
  $('#furniture-description').fadeIn();
  $('#bench-description').hide();
  setTimeout(function () {
    $('.equipment-photos').slick('refresh');
  }, 300);
});
$('#close-textile-description').on('click', function (event) {
  $('#decoration').fadeIn();
  $('#textile-description').hide();
});
/******/ })()
;