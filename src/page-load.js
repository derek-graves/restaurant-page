const pageLoad = () => {
  const content = document.getElementById("content");

  // create three main containers
  const header = document.createElement("div");
  header.classList.add("header");

  const main = document.createElement("div");
  main.classList.add("main");

  const footer = document.createElement("div");
  footer.classList.add("footer");

  // create and add content to header
  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = "Calle Dim Sum";
  header.appendChild(name);

  const nav = document.createElement("div");
  nav.classList.add("nav");

  const home = document.createElement("div");
  home.classList.add("nav-option");
  home.classList.add("active");
  home.textContent = "Home";
  const menu = document.createElement("div");
  menu.classList.add("nav-option");
  menu.textContent = "Menu";
  const contact = document.createElement("div");
  contact.classList.add("nav-option");
  contact.textContent = "Contact";

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.appendChild(nav);

  // create and add content to footer
  const firstParagraph = document.createElement("div");
  const secondParagraph = document.createElement("div");
  firstParagraph.innerHTML =
    "Made by <a href='https://github.com/derek-graves'>derek-graves</a>";
  secondParagraph.innerHTML =
    "Image from <a href='https://unsplash.com/photos/D-vDQMTfAAU'>charlesdeluvio</a> on Unsplash";
  footer.appendChild(firstParagraph);
  footer.appendChild(secondParagraph);

  // append all content
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

export default pageLoad;
