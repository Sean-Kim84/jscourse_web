// DOM - Document Object Model

// const p = document.querySelector('p');
// p.remove();
// console.log(p);

// const h1 = document.querySelector('h1');
// h1.remove();
// console.log(h1);

const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
  console.log(p.textContent)
  // p.textContent = "*******";
})
