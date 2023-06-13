// Obtém o elemento do botão "Sair" pelo seletor de classe
var logoutBtn = document.querySelector('.logout-btn');

// Adiciona um evento de clique ao botão
logoutBtn.addEventListener('click', function() {
  // Redireciona para a página index.html
  window.location.href = '../index.html';
});

// Espera até que o documento esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Obtém todos os elementos com a classe "rectangle"
  var rectangles = document.querySelectorAll('.rectangle');

  // Itera sobre cada elemento
  rectangles.forEach(function(rectangle) {
    // Adiciona um ouvinte de evento de clique a cada retângulo
    rectangle.addEventListener('click', function() {
      // Redireciona para a página desejada com base no ID do retângulo clicado
      var id = rectangle.getAttribute('id');
      window.location.href = id + '/index.html';
    });

    // Adiciona um ouvinte de evento de mouseover a cada retângulo
    rectangle.addEventListener('mouseover', function() {
      // Altera o cursor para "pointer" quando o mouse estiver sobre o retângulo
      rectangle.style.cursor = 'pointer';
    });

    // Adiciona um ouvinte de evento de mouseout a cada retângulo
    rectangle.addEventListener('mouseout', function() {
      // Remove a alteração do cursor quando o mouse sair do retângulo
      rectangle.style.cursor = 'default';
    });
  });
});
