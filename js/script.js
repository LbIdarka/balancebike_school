//функция для фиксированной навигации по лэндингу
window.onscroll = function() {//событие скрола
  var stikyMenu = document.querySelector(".main-nav"); //задаем переменную для элемента, который будет "липнуть"
  var scrolled = window.pageYOffset; //проверяем состояние скрола
  
  if(scrolled >= 130) { //если скрол меньше или равен отступу меню + навигация, то добавляем класс с position: fixed;
    stikyMenu.classList.add("nav-fixed"); 
  } else  {
    stikyMenu.classList.remove("nav-fixed");
  }
}


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
