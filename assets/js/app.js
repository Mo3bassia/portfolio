import { typeWriter } from "./type-writer.js";

let themeSwitch = document.querySelector(".theme-switch__container");

if (!localStorage.getItem("mo3bassia-theme")) {
  localStorage.setItem("mo3bassia-theme", "light");
} else {
  if (localStorage.getItem("mo3bassia-theme") == "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.querySelector(".theme-switch__checkbox").checked = "true";
  }
}

themeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("mo3bassia-theme", "dark");
  } else {
    localStorage.setItem("mo3bassia-theme", "light");
  }
});

[
  "a Frontend Web Developer",
  "an Electrical Engineering student",
  "a Self Learner",
].typeWriter(document.querySelector(".auto-writer"));
