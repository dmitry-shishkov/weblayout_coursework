document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.check-input:checked')
    .parentElement.classList.add('checkbox-label--color');
})

$(document).ready(function(){
  // $('.checkbox-label').find('input[type=checkbox]').change(function() {
  //   if (this.checked)
  //     $(this).parent().addClass('checkbox-label--color');
  //   else
  //     $(this).parent().removeClass('checkbox-label--color');
  // });
  $( '.checkbox-label' ).on( 'click', 'input:checkbox', function () {
    $( this ).parent().toggleClass( 'checkbox-label--color', this.checked );
  });
});