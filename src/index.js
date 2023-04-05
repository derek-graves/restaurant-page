import "./style.css";
import pageLoad from "./page-load";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact.js";

pageLoad();

const homeButton = document.querySelector(".nav").children.item(0);
homeButton.onclick = loadHome;

const menuButton = document.querySelector(".nav").children.item(1);
menuButton.onclick = loadMenu;

const contactButton = document.querySelector(".nav").children.item(2);
contactButton.onclick = loadContact;
