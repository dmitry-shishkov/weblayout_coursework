document.querySelector('.events__btn').addEventListener('click', hideItems);
  function hideItems(){
    document.querySelectorAll('.events__item').forEach(function(eventsItem){
      eventsItem.classList.remove('events__item-hide');
      eventsItem.classList.remove('events__item-hide-768');
    })
    this.style.display = 'none';
}