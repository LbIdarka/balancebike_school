'use strict';

//======= функция для фиксированной навигации по лендингу =======//
(function () {
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
})();
