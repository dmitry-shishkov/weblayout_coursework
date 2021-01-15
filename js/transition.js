// $(document).ready(function(){
//   $(".menu__item").on("click","a", function (event) {
//       event.preventDefault();
//       var id  = $(this).attr('href'),
//           top = $(id).offset().top;
//       $('body,html').animate({scrollTop: top}, 1800);
//   });
// });

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
});