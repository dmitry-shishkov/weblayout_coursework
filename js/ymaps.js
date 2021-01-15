ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.760, 37.62],
        zoom: 15,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/marker.svg',
        iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        bottom: '315px',
        right: '10px'
      }
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
          bottom: '350px',
          right: '10px'
      }
    });
}