function changeBackground(imageSrc) {
  // تغيير خلفية العنصر الذي له معرف "section"
  document.getElementById(
    "section"
  ).style.backgroundImage = `url('${imageSrc}')`;
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
  });
});
