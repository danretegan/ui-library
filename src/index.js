import Tooltip from "./ui-library/tooltip.js";
import Dropdown from "./ui-library/dropdown.js";
import Tabs from "./ui-library/tabs.js";
import Snackbar from "./ui-library/snackbar.js";

console.log("UI Library!");

//* create a tooltip:
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

//* create dropdowns (2):
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((elem) => {
  const instance = new Dropdown(elem);
  instance.init();
});

//* create tabs:
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//* create snackbar:
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("You ckicked me :)");
});
