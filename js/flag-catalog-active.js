document.addEventListener('DOMContentLoaded', function() {
	const list = document.querySelectorAll('.flags__item')
	list.forEach(item =>{
		item.addEventListener('click', (e) =>{
		list.forEach(el=>{ el.classList.remove('flags__item-active'); });
		item.classList.add('flags__item-active')
		})
	})
})

