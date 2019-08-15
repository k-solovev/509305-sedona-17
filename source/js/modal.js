var popupSuccess = document.querySelector(".popup-success");
var popupError = document.querySelector(".popup-error");
var feedbackBtn = document.querySelector('.feedback__btn');
var feedbackInputName = document.querySelector('.feedback__input--name');
var feedbackInputSecondName = document.querySelector('.feedback__input--second-name');
var feedbackInputThirdName = document.querySelector('.feedback__input--third-name');

popupSuccess.classList.remove("popup-success--opened");
popupError.classList.remove("popup-error--opened");

feedbackBtn.addEventListener("click", function() {
  if (feedbackInputName.value === '') {
    popupError.classList.add("popup-error--opened");
  } else if (feedbackInputSecondName.value === '') {
    popupError.classList.add("popup-error--opened");
  } else {
    popupError.classList.add("popup-success--opened");
  }
});
