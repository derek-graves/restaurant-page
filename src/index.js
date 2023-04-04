import "./style.css";
import pageLoad from "./page-load";
import loadContact from "./contact.js";
import loadMenu from "./menu";

pageLoad();

const contactButton = document.querySelector(".nav").children.item(2);
contactButton.onclick = loadContact;

const menuButton = document.querySelector(".nav").children.item(1);
menuButton.onclick = loadMenu;
