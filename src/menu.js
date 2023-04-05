import underlineNavUI from "./nav";

const menuElementCreator = (heading, content) => {
  const newElement = document.createElement("div");
  newElement.classList.add("menu-container");

  const newHead = document.createElement("div");
  newHead.classList.add("menu-header");
  newHead.textContent = heading;
  newElement.appendChild(newHead);

  // create menu item element for each key in content
  // append element text and price for each item
  for (const key of Object.keys(content)) {
    const newContent = document.createElement("p");
    newContent.textContent = `${key}  ${content[key]}`;
    newElement.appendChild(newContent);
  }

  return newElement;
};

const createMenu = () => {
  // generate contents
  const menu = [];

  const fullMenu = {
    "Dim Sum": {
      "Steamed Pork Soup Dumplings": 11,
      "Steamed Shrimp Dumplings": 10,
      "Sticky Rice in Lotus Leaf": 12,
      "Pork & Chive Dumplings": 8,
      "Steamed Marinated Pork Bao": 12,
      "Shrimp Noodle Rolls": 8,
      "Taro Cake": 6,
      "Scallion Pancakes": 6,
    },
    "Cold Dishes": { "Cucumber Salad": 9, "Seaweed Salad": 7 },
    Soup: {
      "Shanghai Wonton Soup": 12,
      "Tofu Soup with Bean Threads": 8,
      "Hot & Sour Soup": 10,
    },
    "Bubble Tea": {
      "Black Milk Tea": 5,
      "Coconut Milk Tea": 5,
      "Red Bean Milk Tea": 6,
      "Taro Milk Tea": 6,
    },
  };

  for (const key of Object.keys(fullMenu)) {
    const menuElement = menuElementCreator(key, fullMenu[key]);
    menu.push(menuElement);
  }

  return menu;
};

const setBackground = () => {
  // maintain or adjust display of main background
  const main = document.querySelector(".main");
  if (!main.classList.contains("show-bg")) {
    main.classList.add("show-bg");
  }
};

const decenterContent = () => {
  const main = document.querySelector(".main");
  if (main.classList.contains("center-content")) {
    main.classList.remove("center-content");
  }
};

const loadMenu = () => {
  setBackground();
  decenterContent();
  underlineNavUI(1);

  const main = document.querySelector(".main");
  main.textContent = "";
  const menu = createMenu();
  for (const item of menu) {
    main.appendChild(item);
  }
};

export default loadMenu;
