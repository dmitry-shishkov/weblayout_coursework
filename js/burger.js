  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function(){
      document.querySelector('.burger').classList.toggle('active');
      document.querySelector('.header-menu').classList.toggle('animate');
    })
  })