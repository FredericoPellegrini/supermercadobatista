// Botão "Voltar" - Retorna para a página anterior
document.querySelector('.back-btn').addEventListener('click', function() {
    history.back();
  });
  
  document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = '../../../../index.html';
});
