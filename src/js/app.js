let activeHole;
let nextActiveHole;
let index;
const holes = document.querySelectorAll('.hole');

export default function changeHole() {
  setInterval(() => {
    activeHole = document.querySelector('.hole_has-goblin');

    do {
      index = Math.floor(1 + Math.random() * 12);
      nextActiveHole = holes[index - 1];
    } while (activeHole && nextActiveHole === activeHole);

    if (activeHole) {
      activeHole.className = 'hole';
    }
    nextActiveHole.classList.add('hole_has-goblin');
  }, 800);
}

document.addEventListener('DOMContentLoaded', changeHole());
