// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        myMap.controls.remove("searchControl");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("fullscreenControl");
        myMap.controls.remove("rulerControl");
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("multiTouch");
        myMap.behaviors.disable("drag");
        myMap.controls.remove("typeSelector");
        // myMap.geoObjects.add(placeMarkCustom);
    }
