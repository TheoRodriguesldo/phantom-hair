// =========================================================
// PHANTOM HAIR - script.js
// 1. Menu responsivo (abre/fecha no mobile)
// 2. Botão CTA "Comprar agora" com resposta na tela
// (Scroll suave, navbar fixa, hover e animações são feitos em CSS)
// =========================================================

// 1. MENU RESPONSIVO
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

function definirMenu(aberto) {
  navbarMenu.classList.toggle('navbar__menu--ativo', aberto);
  menuToggle.setAttribute('aria-expanded', String(aberto));
  menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

if (menuToggle && navbarMenu) {
  menuToggle.addEventListener('click', function () {
    definirMenu(!navbarMenu.classList.contains('navbar__menu--ativo'));
  });

  // Fecha o menu ao clicar em um link
  navbarMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { definirMenu(false); });
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') definirMenu(false);
  });

  // Se a tela voltar a ser grande, garante o menu fechado
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) definirMenu(false);
  });
}

// 2. BOTÃO CTA "COMPRAR AGORA"
const btnComprar = document.getElementById('btnComprar');
const compraMsg = document.getElementById('compraMsg');

if (btnComprar && compraMsg) {
  btnComprar.addEventListener('click', function () {
    compraMsg.textContent = 'Pedido simulado! Este é um projeto fictício, nenhuma compra foi realizada.';
    compraMsg.hidden = false;
  });
}