window.addEventListener('DOMContentLoaded', function() {
  $('.accordion').accordion({
    heightStyle: 'content',
    active: 0,
    collapsible: true,
    header: '.dates__title',
    animate:{
      duration: 500,
    }
  });

  $(".accordion").accordion("refresh");
})