const bar = document.getElementById('bar');
const cross = document.getElementById('cross');
const menuUl = document.getElementById('menuUl');

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  console.log(width);

  if (width <= 1024) {
    menuUl.style.display = 'none';
    console.log('ok');
    menuUl.classList.add('navToggle');
  } else {
    menuUl.classList.remove('navToggle');
    menuUl.style.display = 'flex';
  }
});

// console.log(width);
console.log(menuUl);
bar.addEventListener('click', () => {
  cross.style.display = 'block';
  bar.style.display = 'none';
  menuUl.style.display = 'grid';
  menuUl.classList.add('navToggle');
  cross.addEventListener('click', () => {
    cross.style.display = 'none';
    bar.style.display = 'block';
    menuUl.style.display = 'none';
    menuUl.classList.remove('navToggle');
  });
});
