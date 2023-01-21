const submit = document.querySelector("#submit");
const ratings = document.querySelectorAll("[data-rating]");
const inputArea = document.querySelector("[data-input]");
const feedback = document.querySelector("[data-feedback]");
const ratingHolder = document.querySelector("[data-rating-output]");
let chosen;

chosen = document.querySelector("[data-rating]:checked").value;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    chosen = document.querySelector("[data-rating]:checked").value;
  });
});

submit.addEventListener("click", () => {
  inputArea.classList.remove("active");
  feedback.classList.add("active");
  ratingHolder.innerHTML = chosen;
});
