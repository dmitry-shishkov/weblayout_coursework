document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.check-input:checked')
    .parentElement.classList.add('checkbox-label--color');
})

$(document).ready(function(){
  $( '.checkbox-label' ).on( 'click', 'input:checkbox', function () {
    $( this ).parent().toggleClass( 'checkbox-label--color', this.checked );
  });
});