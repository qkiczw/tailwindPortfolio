// animate on scroll livrart initialize code
AOS.init();

// nav active icon code
const navIconColorHandle = () => {
  const sections = document.querySelectorAll("section");
  const navIcons = document.querySelectorAll(".nav__item");

  sections.forEach((section) => {
    const scrollPosFromTheTop = window.scrollY;
    const sectionPosFromTheTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosFromTheTop >= sectionPosFromTheTop &&
      scrollPosFromTheTop < sectionPosFromTheTop + sectionHeight
    ) {
      navIcons.forEach((icon) => {
        icon.classList.remove("icon--active");
        document
          .querySelector(`a[href*=${sectionId}]`)
          .classList.add("icon--active");
      });
    }
  });
};

window.addEventListener("scroll", navIconColorHandle);
