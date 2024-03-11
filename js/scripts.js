console.log("Hello World!");

// nav active icon code
const navIconColorHandle = () => {
  const sectionTitles = document.querySelectorAll(".section__title");
  const navIcons = document.querySelectorAll(".nav__item");

  const scrollPosition = window.scrollY;
  const scrollThreshold = window.innerHeight - 150;

  //   Napisz taki kod żeby sprawdzało każdy section title od góry i jeżeli
  //   jakiś section ma mniej nic scroll treshold to ikona o takim samym dataset robi się zielona!!!
  sectionTitles.forEach((title) => {
    const titleFromTheTop = title.getBoundingClientRect().top;

    if (titleFromTheTop > 0 && titleFromTheTop < scrollThreshold) {
      let activeElement = document.querySelector(`.` + `${title.id}`);
      activeElement.classList.add("icon--active");
    } else if (titleFromTheTop > -100) {
      let activeElement = document.querySelector(`.` + `${title.id}`);
      activeElement.classList.remove("icon--active");
    }
  });
};

window.addEventListener("scroll", navIconColorHandle);
