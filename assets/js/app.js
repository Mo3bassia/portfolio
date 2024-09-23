import { typeWriter } from "./type-writer.js";

let themeSwitch = document.querySelector(".toggle").querySelector("div");

if (!localStorage.getItem("mo3bassia-theme")) {
  localStorage.setItem("mo3bassia-theme", "light");
} else {
  if (localStorage.getItem("mo3bassia-theme") == "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.querySelector(".toggle").querySelector(".peer").checked = "true";
  }
}

function toggleFunc() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("mo3bassia-theme", "dark");
  } else {
    localStorage.setItem("mo3bassia-theme", "light");
  }
}

document
  .querySelector(".toggle")
  .querySelectorAll("svg")
  .forEach((svg) => {
    svg.addEventListener("click", function () {
      toggleFunc();
    });
  });

themeSwitch.addEventListener("click", function () {
  toggleFunc();
});

[
  "a Frontend Web Developer",
  "an Electrical Engineering student",
  "a Self Learner",
].typeWriter(document.querySelector(".auto-writer"));

const sections = document.querySelectorAll("section");

const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let allLinks = document.querySelectorAll("ul li > a");
      allLinks.forEach((link) => {
        link.classList.remove("dark:text-primaryColor");
        link.classList.add("dark:text-slate-200");
        link.classList.remove("before:opacity-100", "before:-bottom-1.5");
      });
      let currentEl = document.querySelector(
        `[data-target='${entry.target.id}']`
      );
      currentEl.classList.remove("before:bottom-0");
      currentEl.classList.add("before:opacity-100", "before:-bottom-1.5");
      currentEl.classList.add("dark:text-primaryColor");
      currentEl.classList.remove("dark:text-slate-200");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

let menuBtn = document.querySelector(".menu input");
menuBtn.addEventListener("click", function () {
  let ulMenu = document.querySelector("nav ul");
  ulMenu.classList.toggle("opacity-100");
  ulMenu.classList.toggle("invisible");
  ulMenu.classList.toggle("z-10");
});
