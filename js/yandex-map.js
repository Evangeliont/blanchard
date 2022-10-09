// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        let center = [55.758468, 37.601088]
        let myMap = new ymaps.Map("map", {
            center: center,
            zoom: 14,
            controls: ["smallMapDefaultSet"],
        })
        let placeMarkCustom = new ymaps.Placemark(
          center,
          {
            balloonContent: "Леонтьевский переулок, дом 5/1",
          },
          {
            iconLayout: "default#image",
            iconImageHref: "../img/yandex-map/marker.svg",
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0],
          }
        )
        myMap.controls.remove("searchControl");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("fullscreenControl");
        myMap.controls.remove("rulerControl");
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("multiTouch");
        myMap.behaviors.disable("drag");
        myMap.controls.remove("typeSelector");
        myMap.geoObjects.add(placeMarkCustom);
    }
