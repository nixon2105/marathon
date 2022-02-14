const item = document.querySelector('.item');

const dragStart = (e) => {
  e.target.classList.add('hold');
};

const dragEnd = (e) => {
  e.target.classList.remove('hold');
};

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);
