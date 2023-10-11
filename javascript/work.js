function changeBackground(imageUrl, buttonNumber) {
  // Change the background image
  var backgroundContainer = document.getElementById("section"); // Assuming you want to change the background of the element with id "section"
  backgroundContainer.style.backgroundImage = "url(" + imageUrl + ")";
  // Save the selected image URL in local storage
  localStorage.setItem("backgroundImage", imageUrl);
  // Save the selected button number in local storage
  localStorage.setItem("selectedButton", buttonNumber);
}

const btns = document.querySelectorAll(".line-btns button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove active from btn
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    // Add active to btn
    e.target.classList.add("active");
    // Get the button number and call changeBackground
    var buttonNumber = parseInt(e.target.textContent);
  });
});
window.onload = function () {
  var storedImageUrl = localStorage.getItem("backgroundImage");
  if (storedImageUrl) {
    var backgroundContainer = document.getElementById("section");
    backgroundContainer.style.backgroundImage = "url(" + storedImageUrl + ")";
  }
  var selectedButton = localStorage.getItem("selectedButton");
  if (selectedButton) {
    btns.forEach((element) => {
      element.classList.remove("active");
    });
    // Set the "active" class on the button based on the stored data
    btns.forEach((btn) => {
      if (parseInt(btn.textContent) === parseInt(selectedButton)) {
        btn.classList.add("active");
      }
    });
  }
};
// nnnnnnnnnnnnnnnnnnnnnnnnn
