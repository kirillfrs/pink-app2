let reviewItemOne = document.querySelector('.reviews__item--1');
let reviewItemTwo = document.querySelector('.reviews__item--2');
let reviewItemthree = document.querySelector('.reviews__item--3');
let sliderList = document.querySelector('.slider__list');

let priceList = document.querySelector('.table-price__list');
let btn = document.querySelectorAll('.slider__toggle');
let btnActive = document.querySelector('.slider__toggle-active');




let btnDisable = function (e) {
  for (var i = 0; i < btn.length; i++) {
    var currentbtn;
    btn[i].addEventListener("click", function () {
      if (currentbtn) {
        currentbtn.classList.remove('slider__toggle-active');
      }
      this.classList.add("slider__toggle-active");
      currentbtn = this;
    });
  }
}



btnDisable();
// slider review
btn[0].addEventListener("click", function (e) {
  e.preventDefault();
  reviewItemOne.style.display = "flex";
  reviewItemTwo.style.display = "none";
  reviewItemthree.style.display = "none";

});
btn[1].addEventListener("click", function (e) {
  e.preventDefault();
  reviewItemOne.style.display = "none";
  reviewItemTwo.style.display = "flex";
  reviewItemthree.style.display = "none";
});
btn[2].addEventListener("click", function (e) {
  e.preventDefault();
  reviewItemOne.style.display = "none";
  reviewItemTwo.style.display = "none";
  reviewItemthree.style.display = "flex";
});

// slider table
btn[3].addEventListener("click", function (e) {
  if (priceList.classList.contains("table-price__list")) {
    priceList.classList.add("table-price__list--first");
    priceList.classList.remove("table-price__list--second")
  } else {

  }
});

btn[4].addEventListener("click", function (e) {
  if (priceList.classList.contains("table-price__list--first")) {
    priceList.classList.remove("table-price__list--first");
  } else {
    priceList.classList.remove("table-price__list--second")
  }

});

btn[5].addEventListener("click", function (e) {
  if (priceList.classList.contains("table-price__list")) {
    priceList.classList.add("table-price__list--second");
    priceList.classList.remove("table-price__list--first");
  } else {
    priceList.classList.remove("table-price__list--second");

  }
});


