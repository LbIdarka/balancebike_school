//======= функция для фиксированной навигации по лендингу =======//

window.onscroll = function() {// событие скрола
  var stikyMenu = document.querySelector(".main-nav"); // задаем переменную для элемента, который будет "липнуть"
  var scrolled = window.pageYOffset; //проверяем состояние скрола
  var menu = document.querySelector(".page-header-wrapper")
  var cssProp = window.getComputedStyle(menu, null).getPropertyValue("height"); // получаем высоту меню из css
  var heightMenu = parseInt(cssProp, 10); // приводим к числу, полученное значение

  if(scrolled >= heightMenu) { // если скрол меньше или равен отступу меню, то добавляем класс с position: fixed;
    stikyMenu.classList.add("nav-fixed"); 
  } else  {
    stikyMenu.classList.remove("nav-fixed");
  }
}


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

      myMap.geoObjects
      .add(new ymaps.Placemark([47.249879699421136,39.78802749999991]))
      .add(new ymaps.Placemark([47.18675302959791,39.62492681626882]))
  }
