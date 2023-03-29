import "./style.css";
import pageLoad from "./page-load";
import contact from "./contact.js";

pageLoad();

const contactButton = document.querySelector(".nav").children.item(2);
contactButton.onclick = contact;
