const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

// show menu
toggleMenu.addEventListener("click", function () {
  navMenu.classList.add("show");
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
});

// hide menu
closeMenu.addEventListener("click", function () {
  navMenu.classList.remove("show");
  document.body.style.backgroundColor = "#fffff0";
});

// remove menu
const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach(function (link) {
  link.addEventListener("click", linkAction);
});

// lickAction function
function linkAction() {
  navMenu.classList.remove("show");
  document.body.style.backgroundColor = "#fffff0";
}

// scroll section active link

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollYaxis = window.pageYOffset;
  //    This is commonly used to determine how far the user has scrolled vertically on a web page.

  sections.forEach(function (section) {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    if (scrollYaxis > sectionTop && scrollYaxis <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
/*offsetHeight is a property of an HTML element. It represents the height of the element, including the content, padding, and borders, but excluding margins. It is typically expressed in pixels
 */
