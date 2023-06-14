// Botão Voltar
var backButton = document.querySelector('.back-btn');
backButton.addEventListener('click', function(event) {
  event.preventDefault();
  history.back(); // Volta para a página anterior no histórico do navegador
});

// Botão Sair
var logoutButton = document.querySelector('.logout-btn');
logoutButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = '../../index.html';
});