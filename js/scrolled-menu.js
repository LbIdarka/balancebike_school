'use strict';

//======= листание меню на планшетной и мобильной версии =======//
(function () {
  var MIN_INDEX = 2;
  var PLUS_INDEX = 1;
  var menu = document.querySelector(".main-nav-list");
  var menuItem = document.querySelectorAll(".main-nav-item");
  var btnNext = document.querySelector(".main-nav-btn-next");
  var btnBack = document.querySelector(".main-nav-btn-back");

  var scrolledMenu = function () {
    var i = MIN_INDEX;
    var scaleLineCoords = menuItem[i].getBoundingClientRect();
    var widthItem =  Math.round(menu.clientWidth - scaleLineCoords.width);

    btnNext.addEventListener('click', function () {
      if (menu.scrollWidth - menu.scrollLeft - menu.offsetWidth === 0) {
        btnNext.setAttribute("disabled", "disabled");
      }
      i += PLUS_INDEX;
      menu.scrollLeft += widthItem;
      btnBack.removeAttribute("disabled");
    });

    btnBack.addEventListener('click', function () {
      if (menu.scrollLeft === 0) {
        btnBack.setAttribute("disabled", "disabled");
      }
      btnNext.removeAttribute("disabled");

      i -= PLUS_INDEX;
      menu.scrollLeft -= widthItem;
    });
  };
  scrolledMenu();
})();
