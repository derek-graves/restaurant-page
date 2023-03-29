const contact = () => {
  // maintain or adjust display of main background
  const main = document.querySelector(".main");
  if (!main.classList.contains("show-main-bg")) {
    main.classList.add("show-main-bg");
  }

  // generate contents
  const mainInner = document.querySelector(".main-inner");
  const contactInfo = {
    Address: "1 Calle Dim Sum, San Juan, Puerto Rico 00901",
    Phone: "(225) 533-4678 ext. 6",
    Email: "orders@calledimsum.com",
  };

  for (const key of contactInfo.keys()) {
    const contactElement = contactElementCreator(key, contactInfo[key]);
    mainInner.append(contactElement);
  }
};

const contactElementCreator = (heading, content) => {
  const newElement = document.createElement("div");
  newElement.classList.add("contact-info-container");

  const newHead = document.createElement("div");
  newHead.classList.add("contact-info-header");
  newHead.textContent = heading;

  const newContent = document.createElement("p");
  newContent.textContent = content;

  newElement.appendChild(newHead);
  newElement.appendChild(newContent);

  return newElement;
};
