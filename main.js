const themeSwitcherBtn = document.querySelector('.themeSwitcher');
const main = document.querySelector('.main');
const cards = document.querySelectorAll(
  '.main__socialMediaDb-content-item, .main__overview-content-item'
);
const texts = document.querySelectorAll(
  '.heading-primary, .heading-tertiary, .followers-value'
);

let lightActive = false;

themeSwitcherBtn.addEventListener('click', function () {
  lightActive = !lightActive;

  if (lightActive) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
  }

  themeSwitcherBtn.classList.toggle('active');
  main.classList.toggle('active');

  cards.forEach((card) => {
    card.classList.toggle('active');
  });
  texts.forEach((text) => {
    text.classList.toggle('active');
  });

  document
    .querySelectorAll('.themeName, .followers-count, .heading-secondary')
    .forEach((el) => {
      el.classList.toggle('active');
    });
});

// - Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
// - Dark Grayish Blue (Text): hsl(228, 12%, 44%)
// - Very Dark Blue (Text): hsl(230, 17%, 14%)
