var body = document.querySelector('.nojs');

body.classList.remove('nojs');

//======= функция для фиксированной навигации по лендингу =======//
var stikyMenu = document.querySelector(".main-nav"); // задаем переменную для элемента, который будет "липнуть"
window.onscroll = function() {// событие скрола
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

//======= листание меню на планшетной и мобильной версии =======//

var menu = document.querySelector(".main-nav-list");
var menuItem = document.querySelectorAll(".main-nav-item");
var btnNext = document.querySelector(".main-nav-btn-next");
var btnBack = document.querySelector(".main-nav-btn-back");
var widthItem = Math.round(menu.scrollWidth - menu.clientWidth);

var scrolledMenu = function () {

  btnNext.addEventListener('click', function () {
    if (menu.scrollWidth - menu.scrollLeft - menu.offsetWidth === 0) {
      btnNext.setAttribute("disabled", "disabled");
    }
    menu.scrollLeft += widthItem;
    btnBack.removeAttribute("disabled");
    console.log(widthItem);
    console.log(menu.scrollLeft);
  });

  btnBack.addEventListener('click', function () {
    if (menu.scrollLeft === 0) {
      btnBack.setAttribute("disabled", "disabled");
    }
    btnNext.removeAttribute("disabled");
    menu.scrollLeft -= widthItem;
    console.log(widthItem);
    console.log(menu.scrollLeft);
  });
};
scrolledMenu();

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
      .add(new ymaps.Placemark([47.204264, 39.732877]))
      .add(new ymaps.Placemark([47.289298, 39.709880]))
  }
