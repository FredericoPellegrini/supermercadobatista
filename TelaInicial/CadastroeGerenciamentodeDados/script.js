// Script.js

// Botão "Voltar" - Retorna para a página anterior
document.querySelector('.back-btn').addEventListener('click', function() {
    history.back();
  });
  
  // Botão "Logout" - Redireciona para a página index.html duas pastas acima
  document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = '../../index.html';
  });
  