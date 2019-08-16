var popupSuccess = document.querySelector(".popup-success");
var popupError = document.querySelector(".popup-error");
var feedbackBtn = document.querySelector('.feedback__btn');
var errorBtn = document.querySelector('.popup-error__btn');
var successBtn = document.querySelector('.popup-success__btn');
var inputName = document.querySelector('.feedback__input--name');
var inputSecondName = document.querySelector('.feedback__input--second-name');
var inputThirdName = document.querySelector('.feedback__input--third-name');
var inputPhone = document.querySelector('.feedback__input--tel');
var inputEmail = document.querySelector('.feedback__input--email');

popupSuccess.classList.remove("popup-success--opened");
popupError.classList.remove("popup-error--opened");

// проверка полей
feedbackBtn.addEventListener("click", function() {
  if (inputName.value === '') {
    popupError.classList.add("popup-error--opened");
  } else if (inputSecondName.value === '') {
    popupError.classList.add("popup-error--opened");
  } else if (inputThirdName.value === '') {
    popupError.classList.add("popup-error--opened");
  } else if (inputPhone.value === '') {
    popupError.classList.add("popup-error--opened");
  } else if (inputEmail.value === '') {
    popupError.classList.add("popup-error--opened");
  } else {
    popupSuccess.classList.add("popup-success--opened");
  }
});

//закрытие модальных окон
errorBtn.addEventListener("click", function () {
  popupError.classList.remove("popup-error--opened");
  popupError.classList.add("popup-error--closed");
})

successBtn.addEventListener("click", function () {
  popupSuccess.classList.remove("popup-success--opened");
  popupSuccess.classList.add("popup-success--closed");
})
