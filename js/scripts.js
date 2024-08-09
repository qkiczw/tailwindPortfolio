// animate on scroll livrart initialize code
AOS.init();

// menu mobile variables
const menuMobileBtnOpen = document.querySelector(".nav-mobile__button__open");
const menuMobileBtnClose = document.querySelector(".nav-mobile__button__close");
const menuMobileMenu = document.querySelector(".nav-mobile__menu");

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

// menu mobile code
menuMobileBtnOpen.addEventListener("click", function () {
  menuMobileMenu.classList.remove("hidden");
});

menuMobileBtnClose.addEventListener("click", function () {
  menuMobileMenu.classList.add("hidden");
});
