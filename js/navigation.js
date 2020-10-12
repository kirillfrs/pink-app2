var mainNav = document.querySelector('.main-navigation');
var navToggleBtn = document.querySelector('.main-navigation__toggle');

mainNav.classList.remove('main-navigation--nojs');

navToggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (mainNav.classList.contains("main-navigation--closed")){
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add("main-navigation--opened");
  } else {
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove("main-navigation--opened");

  }
});
