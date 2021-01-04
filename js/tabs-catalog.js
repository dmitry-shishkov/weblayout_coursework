document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs-flag-btn').forEach(function(tabsFlagBtn) {
    tabsFlagBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-flag-content').forEach(function(tabFlagContent){
        tabFlagContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
  document.querySelector('.tabs-flag-btn').click();
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs-artist-btn').forEach(function(tabsArtistBtn) {
    tabsArtistBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-artist-content').forEach(function(tabArtistContent){
        tabArtistContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
  document.querySelector('.tabs-artist-btn').click();
})