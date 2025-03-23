document.addEventListener("DOMContentLoaded", () => {
  const ratingState = document.getElementById("rating-state");
  const thankYouState = document.getElementById("thank-you-state");
  const ratingButtons = document.querySelectorAll(".rating-component__button");
  const submitButton = document.getElementById("submit-btn");
  const selectedRating = document.getElementById("selected-rating");

  let rating = null;

  // Add event listeners to rating buttons
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      ratingButtons.forEach((btn) =>
        btn.classList.remove("rating-component__button--active")
      );

      // Add active class to clicked button
      button.classList.add("rating-component__button--active");

      // Store the rating value
      rating = button.value;
    });
  });

  // Add event listener to submit button
  submitButton.addEventListener("click", () => {
    if (rating) {
      // Display the selected rating
      selectedRating.textContent = rating;

      // Show the thank you state, hide rating state
      ratingState.classList.add("hidden");
      thankYouState.classList.remove("hidden");
    } else {
      alert("Please select a rating before submitting");
    }
  });
});
