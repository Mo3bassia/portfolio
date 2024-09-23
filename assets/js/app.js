let themeSwitch = document.querySelector(".theme-switch__container");

if (!localStorage.getItem("mo3bassia-theme")) {
  localStorage.setItem("mo3bassia-theme", "light");
} else {
  if (localStorage.getItem("mo3bassia-theme") == "light") {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.querySelector(".theme-switch__checkbox").checked = "true";
  }
}

themeSwitch.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mo3bassia-theme", "dark");
  } else {
    localStorage.setItem("mo3bassia-theme", "light");
  }
});
