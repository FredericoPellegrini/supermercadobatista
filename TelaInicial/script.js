// Obtém o elemento do botão "Sair" pelo seletor de classe
var logoutBtn = document.querySelector('.logout-btn');

// Adiciona um evento de clique ao botão
logoutBtn.addEventListener('click', function() {
  // Volta para a página anterior no histórico de navegação
  history.back();
});
