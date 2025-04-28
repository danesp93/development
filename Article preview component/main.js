/*document.querySelector(".imgshare").addEventListener('click', function() {
  const menu = document.getElementById('shareMenu');

  menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';

  let colorElement = document.querySelector(".imgshare");
  colorElement.style.backgroundColor = colorElement.style.backgroundColor === "var(--DBlue)" ? "var(--LiBlue)" : "var(--DBlue)";

  let filterImg = document.querySelector(".imgshare img");
  filterImg.style.filter = filterImg.style.filter === "grayscale(1) brightness(2)" ? "none" : "grayscale(1) brightness(2)";
  
});*/

document.querySelector(".imgshare").addEventListener('click', function() {
  const menu = document.getElementById('shareMenu');
  const img = this.querySelector("img");

  menu.classList.toggle('visible');
  this.classList.toggle('active');
  img.classList.toggle('filtered');
});