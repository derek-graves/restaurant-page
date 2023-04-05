import underlineNavUI from "./nav";

const removeBackground = () => {
  const main = document.querySelector(".main");
  if (main.classList.contains("show-bg")) {
    main.classList.remove("show-bg");
  }
};

const loadHome = () => {
  const main = document.querySelector(".main");
  main.textContent = "";

  removeBackground();
  underlineNavUI(0);
};

export default loadHome;
