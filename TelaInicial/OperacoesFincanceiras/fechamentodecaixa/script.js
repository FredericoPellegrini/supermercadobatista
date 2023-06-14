// Botão "Voltar" - Retorna para a página anterior
document.querySelector('.back-btn').addEventListener('click', function() {
    history.back();
  });
  
  document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = '../../../index.html';
});

// Adicione este código no arquivo "script.js"
document.getElementById('fechar-caixa-btn').addEventListener('click', function() {
    alert('Folha fechada com sucesso!');
    history.back();
  });
  