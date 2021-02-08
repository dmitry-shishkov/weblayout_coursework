$(document).ready(function(){

  $(".realism__btn").click(function() {
    $('.realism__btn').addClass('btn-active');
    $('.realism__list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".realism__container").length) {
      $('.realism__btn').removeClass('btn-active');
      $('.realism__list').hide();
    }
    e.stopPropagation();
  });

  $(".impressionism__btn").click(function() {
    $('.impressionism__btn').addClass('btn-active');
    $('.impressionism__list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".impressionism__container").length) {
      $('.impressionism__btn').removeClass('btn-active');
      $('.impressionism__list').hide();
    }
    e.stopPropagation();
  });

  $(".postimpressionism__btn").click(function() {
    $('.postimpressionism__btn').addClass('btn-active');
    $('.postimpressionism__list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".postimpressionism__container").length) {
      $('.postimpressionism__btn').removeClass('btn-active');
      $('.postimpressionism__list').hide();
    }
    e.stopPropagation();
  });

  $(".vanguard__btn").click(function() {
    $('.vanguard__btn').addClass('btn-active');
    $('.vanguard__list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".vanguard__container").length) {
      $('.vanguard__btn').removeClass('btn-active');
      $('.vanguard__list').hide();
    }
    e.stopPropagation();
  });

  $(".futurism__btn").click(function() {
    $('.futurism__btn').addClass('btn-active');
    $('.futurism__list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".futurism__container").length) {
      $('.futurism__btn').removeClass('btn-active');
      $('.futurism__list').hide();
    }
    e.stopPropagation();
  });

  $(".publications__dropdown-container-320").click(function() {
    $('.publications__checkbox-list').toggle();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".publications__dropdown-container-320").length) {
      $('.publications__checkbox-list').hide();
    }
    e.stopPropagation();
  });

});
