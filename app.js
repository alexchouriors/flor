const card = document.getElementById('card');
const surprise = document.getElementById('surprise');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B584246941333&text=Sebastian%20te%20perdono&type=phone_number&app_absent=0&wame_ctl=1";

// ---------- Corazones flotantes de fondo ----------
function createHearts() {
  const hearts = ['💗', '💕', '🌸', '💖'];
  setInterval(() => {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
  }, 600);
}
createHearts();

// ---------- Lógica del botón "No" escurridizo ----------
function escapeButton() {
  const btnWidth = btnNo.offsetWidth;
  const btnHeight = btnNo.offsetHeight;
  const margin = 10;

  const maxX = window.innerWidth - btnWidth - margin;
  const maxY = window.innerHeight - btnHeight - margin;

  const randomX = Math.random() * Math.max(maxX, margin) + margin / 2;
  const randomY = Math.random() * Math.max(maxY, margin) + margin / 2;

  if (!btnNo.classList.contains('escaping')) {
    btnNo.classList.add('escaping');
  }

  btnNo.style.left = randomX + 'px';
  btnNo.style.top = randomY + 'px';
}

// Escapa al pasar el mouse (desktop)
btnNo.addEventListener('mouseenter', escapeButton);

// Escapa al intentar tocar en móvil (antes del click real)
btnNo.addEventListener('touchstart', function (e) {
  e.preventDefault();
  escapeButton();
}, { passive: false });

// Si por azar logran hacer click, se comporta igual que "Sí"
btnNo.addEventListener('click', goToSurprise);
btnYes.addEventListener('click', goToSurprise);

// Reposiciona si cambia el tamaño de ventana mientras escapa
window.addEventListener('resize', () => {
  if (btnNo.classList.contains('escaping')) {
    escapeButton();
  }
});

// ---------- Transición a la pantalla de sorpresa ----------
function goToSurprise() {
  card.classList.add('hide');

  setTimeout(() => {
    card.style.display = 'none';
    surprise.classList.add('show');

    // 2 segundos después de aparecer el girasol, abrir WhatsApp
    setTimeout(() => {
      window.open(WHATSAPP_URL, '_blank');
    }, 2000);
  }, 700);
}
