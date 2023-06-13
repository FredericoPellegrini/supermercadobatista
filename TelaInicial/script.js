// Obtém o elemento do botão "Sair" pelo seletor de classe
var logoutBtn = document.querySelector('.logout-btn');

// Adiciona um evento de clique ao botão
logoutBtn.addEventListener('click', function() {
  // Redireciona para a página index.html
  window.location.href = '../index.html';
});

// Espera até que o documento esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
  // Obtém a div "Cadastro e Gerenciamento de Dados" pelo ID
  var cadastroDiv = document.getElementById("cadastroDiv");

  // Adiciona um ouvinte de evento de clique à div
  cadastroDiv.addEventListener("click", function() {
    // Redireciona para o arquivo index.html na pasta CadastroeGerenciamentodeDados
    window.location.href = "CadastroeGerenciamentodeDados/index.html";
  });
});
