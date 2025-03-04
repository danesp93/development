
document.querySelector(".imgshare").addEventListener("click", function () {
  alert('Se ha dado clic al botón!');
});

document.getElementById('shareBtn').addEventListener('click', function() {
  const menu = document.getElementById('shareMenu');
  // Alternar la visibilidad del menú
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

const shareLinks = {
  twitter: "https://twitter.com/share?url={url}&text={text}",
  facebook: "https://www.facebook.com/sharer/sharer.php?u={url}",
  linkedin: "https://www.linkedin.com/sharing/share-offsite/?url={url}",
  whatsapp: "https://wa.me/?text={url}"
};

/* const currentUrl = encodeURIComponent(window.location.href); // URL de la página actual
const shareText = encodeURIComponent("¡Mira este contenido interesante!");

document.querySelectorAll('.share-option').forEach(option => {
  option.addEventListener('click', function(event) {
      event.preventDefault();
      const network = event.target.getAttribute('data-network');
      const shareUrl = shareLinks[network].replace('{url}', currentUrl).replace('{text}', shareText);
      
      // Abrir la ventana emergente para compartir
      window.open(shareUrl, '_blank', 'width=600,height=400');
      
      // Ocultar el menú después de compartir
      document.getElementById('shareMenu').style.display = 'none';
  });
}); */