const menuBtn = document.querySelector('.menu-btn');
const menuIcon = menuBtn.querySelector('img');
const menu = document.getElementById('menu');

function setMenu(isOpen) {
  menu.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuIcon.src = isOpen ? 'images/icon-close.svg' : 'images/icon-menu.svg';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuBtn.addEventListener('click', () => {
  setMenu(!menu.classList.contains('open'));
});

menu.addEventListener('click', (e) => {
  if (e.target === menu) setMenu(false);   // click on the dark area closes it
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});