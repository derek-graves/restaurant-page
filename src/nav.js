const underlineNavUI = (navIndex) => {
  const currentNavElement = document
    .querySelector(".nav")
    .children.item(navIndex);
  const otherNavIndices = [0, 1, 2].splice(navIndex, navIndex);
  const otherNavElement1 = document
    .querySelector(".nav")
    .children.item(otherNavIndices[0]);
  const otherNavElement2 = document
    .querySelector(".nav")
    .children.item(otherNavIndices[1]);

  if (otherNavElement1.classList.contains("active")) {
    otherNavElement1.classList.remove("active");
  }

  if (otherNavElement2.classList.contains("active")) {
    otherNavElement2.classList.remove("active");
  }

  currentNavElement.classList.add("active");
};

export default underlineNavUI;
