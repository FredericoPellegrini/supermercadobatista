// Botão "Voltar" - Retorna para a página anterior
document.querySelector('.back-btn').addEventListener('click', function() {
    history.back();
  });
  
  document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = '../../../index.html';
});

// Função de busca
document.querySelector('.search-btn').addEventListener('click', function() {
  var searchInput = document.querySelector('.search-input').value;
  var tableRows = document.querySelectorAll('.product-table tbody tr');
  
  tableRows.forEach(function(row) {
    var codeCell = row.querySelector('td:first-child');
    var code = codeCell.textContent;
    
    if (code === searchInput) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
});