const slides = document.querySelectorAll('.slide');

const slidesPlagin = (activeSlide = 2) => {
  slides[activeSlide].classList.add('active');
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
};

slidesPlagin();
