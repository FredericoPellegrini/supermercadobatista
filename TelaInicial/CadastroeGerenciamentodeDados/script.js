// Botão "Voltar" - Retorna para a página anterior
document.querySelector('.back-btn').addEventListener('click', function() {
  history.back();
});

// Botão "Logout" - Redireciona para a página index.html duas pastas acima
document.querySelector('.logout-btn').addEventListener('click', function() {
  window.location.href = '../../index.html';
});

// Links de cadastro de produtos
var cadastrarLinks = document.querySelectorAll('.produtocadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'produtos/produtosCadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.produtocadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'produtos/produtosConsultar/index.html';
  });
});
