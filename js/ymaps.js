ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.62],
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

    var myMap = new ymaps.Map("map-1024", {
      center: [55.76, 37.66],
      zoom: 14,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([55.753326, 37.646830], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/marker.svg',
      iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);

    var myMap = new ymaps.Map("map-768", {
      center: [55.76, 37.655],
      zoom: 14,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([55.753326, 37.646830], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/marker.svg',
      iconImageSize: [20, 20],
    });
    myMap.geoObjects.add(myPlacemark);
}