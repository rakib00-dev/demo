const fixedNav = document.getElementById('fixedNav');
const bar = document.getElementById('bar');
const cross = document.getElementById('cross');
const menuUl = document.getElementById('menuUl');

setInterval(() => {
  const width = window.innerWidth;
  fixedNav.style.width = `${width}px`;
}, 1000);

window.onload = () => {
  const width = window.innerWidth;
  fixedNav.style.width = `${width}px`;
};

window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width <= 1024) {
    menuUl.style.display = 'none';
    fixedNav.style.width = `${width}px`;
    menuUl.classList.add('navToggle');
  } else {
    menuUl.classList.remove('navToggle');
    menuUl.style.display = 'flex';
    fixedNav.style.width = '';
  }
});

bar.addEventListener('click', () => {
  cross.style.display = 'block';
  bar.style.display = 'none';
  menuUl.style.display = 'grid';
  menuUl.classList.add('navToggle');
  cross.addEventListener('click', () => {
    cross.style.display = 'none';
    bar.style.display = 'block';
    menuUl.classList.remove('navToggle');
    menuUl.style.display = 'none';
  });
});

// navBar onScroll

window.addEventListener('scroll', function () {
  const scrollCount = window.scrollY;
  if (scrollCount >= 82) {
    fixedNav.style.top = '-15px';
    fixedNav.style.boxShadow = '0px -14px 25px 2px #11111199';
    fixedNav.style.position = 'sticky';
  } else if (scrollCount >= 92) {
    fixedNav.style.top = '0px';
    fixedNav.style.position = 'sticky';
  } else {
    fixedNav.style.position = 'relative';
    fixedNav.style.top = '-5px';
    fixedNav.style.boxShadow = null;
  }
  console.log(scrollCount);
});
