let button = document.querySelector('.back-to-top');
button.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

document.onscroll = function (e) {
  if (window.scrollY > 800) {
    button.style.display = 'block';
  } else if (window.scrollY < 800) {
    button.style.display = 'none';
  }
};

let button1 = document.querySelector('.contact-me-link');
button1.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
});
