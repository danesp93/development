document.querySelector(".imgshare").addEventListener('click', function() {
  const menu = document.getElementById('shareMenu');
  const img = this.querySelector("img");

  menu.classList.toggle('visible');
  this.classList.toggle('active');
  img.classList.toggle('filtered');
});