let prevScrollPos = window.scrollY;
let sidebar = document.getElementById("sidebar-l");
let navbar = document.getElementById("navbarId");

window.onscroll = function () {
  let currScrollPos = window.scrollY;
  if (prevScrollPos > currScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currScrollPos;
};

// document.addEventListener("DOMContentLoaded", function (e) {
//   document.addEventListener("scroll", function (e) {
//     let documentHeight = document.body.scrollHeight;
//     let currentScroll = window.scrollY + window.innerHeight;
//     // When the user is [modifier]px from the bottom, fire the event.
//     let modifier = 20;
//     if (currentScroll + modifier > documentHeight) {
//       sidebar.style.paddingBottom = "20px";
//     } else {
//       sidebar.style.paddingBottom = "0";
//     }
//   });
// });

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
