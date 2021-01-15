document.querySelector('.events__btn').addEventListener('click', hideItems);
  function hideItems(){
    document.querySelectorAll('.events__item').forEach(function(eventsItem){
      eventsItem.classList.remove('events__item-hide');
    })
    this.style.display = 'none';
}