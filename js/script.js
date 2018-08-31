'use strict';

(function () {
  var body = document.querySelector('.nojs');
  body.classList.remove('nojs');

  //======= слайдер =======//

    $('.balancebike-foto').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.gallery'
    });

    $('.gallery').slick({
      slidesToShow: 5,
      asNavFor: '.balancebike-foto',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      button: false
    });


  //======= карта =======//

    var myMap;

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [47.249879699421136,39.78802749999991], // парк Авиаторов Ростов
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

        // отключаем зум колёсиком мышки
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects
        .add(new ymaps.Placemark([47.249879699421136,39.78802749999991]))
        .add(new ymaps.Placemark([47.18675302959791,39.62492681626882]))
        .add(new ymaps.Placemark([47.204264, 39.732877]))
        .add(new ymaps.Placemark([47.289298, 39.709880]))
  };
})();
