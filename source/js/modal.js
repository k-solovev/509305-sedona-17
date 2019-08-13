var popupSuccess = document.querySelector(".popup-success");
var popupError = document.querySelector(".popup-error");
var feedbackBtn = document.querySelector('.feedback__btn');

popupSuccess.classList.remove("popup-success--open");
popupError.classList.remove("popup-error--open");

feedbackBtn.addEventListener("click", function() {
  if(popupSuccess.classList.contains("popup-success--closed")) {
      popupSuccess.classList.remove("popup-success--closed");
      popupSuccess.classList.add("popup-success--opened");
  }
});
