const slides = document.querySelectorAll('.slide');

slides.forEach((element) => {
  element.addEventListener('click', () => {
    clearActiveClasses();

    element.classList.add('active');
  });
});

const clearActiveClasses = () => {
  slides.forEach((element) => {
    element.classList.remove('active');
  });
};
