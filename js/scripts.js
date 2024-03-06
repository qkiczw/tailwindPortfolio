console.log("Hello World!");

// nav active icon code
const navIconColorHandle = () => {
  const sectionTitles = document.querySelectorAll(".section__title");
  const navIcons = document.querySelectorAll(".nav__item");

  const scrollPosition = window.scrollY;
  const scrollThreshold = window.innerHeight / 2;

  //   Napisz taki kod żeby sprawdzało każdy section title od góry i jeżeli
  //   jakiś section ma mniej nic scroll treshold to ikona o takim samym dataset robi się zielona!!!
  sectionTitles.forEach((title) => {
    const testtop = title.getBoundingClientRect();
    if (testtop.top < scrollThreshold) {
      navIcons[0].classList.add("icon--active");
    } else {
      navIcons[0].classList.remove("icon--active");
    }
  });
};

window.addEventListener("scroll", navIconColorHandle);
