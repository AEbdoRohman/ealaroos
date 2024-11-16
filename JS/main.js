// تحديد الأيقونة والقائمة وروابط القائمة والجسم (body)
const iconBar = document.querySelector(".icon-bar");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links li a");
const body = document.body;

window.addEventListener("load", function () {
  // Keep the loading screen visible for 5 seconds
  setTimeout(function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
  }, 2000);
});

window.onload = function () {
  var notification = document.getElementById("notification");
  notification.classList.add("show");

  // إخفاء الإشعار بعد 5 ثوانٍ
  setTimeout(function () {
    notification.classList.remove("show");
  }, 3000);
};

// add click event listener to icon bar
iconBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("nav-open");
});

//  add click event listener to nav link items
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("nav-open");
  });
});

// add scrolled class
const header = document.querySelector("header");

// add scrolled class
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// services list toggle
document.querySelectorAll("#services .list li").forEach((item) => {
  item.addEventListener("click", () => {
    const extraInfo = item.querySelector(".extra-info");
    const isVisible =
      extraInfo.style.maxHeight && extraInfo.style.maxHeight !== "0px";

    // Close all extra-info elements
    document.querySelectorAll("#services .list .extra-info").forEach((info) => {
      info.style.maxHeight = null;
      info.style.opacity = 0;
    });

    if (!isVisible) {
      // Open the clicked extra-info
      extraInfo.style.maxHeight = extraInfo.scrollHeight + "px";
      extraInfo.style.opacity = 1;
    }
  });
});

// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// JavaScript: Add fade-in effect on page load
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 100);
  });
});
