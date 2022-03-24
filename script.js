const form = document.forms.ratingForm;
const ratingScreen = document.querySelector(".rating");
const thankyouScreen = document.querySelector(".thank-you");
const userRatingElem = thankyouScreen.querySelector(".user-rating");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let rating = document.querySelector('input[name="ratingBtn"]:checked');
  if (!rating || !rating.value) return;
  userRatingElem.textContent = `You selected ${rating.value} out of 5`;
  ratingScreen.classList.add("hide");
  thankyouScreen.classList.remove("hide");
});
