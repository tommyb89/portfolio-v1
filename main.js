// Copyright current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Scrolling functionality
document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    // console.log('LINK');
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
