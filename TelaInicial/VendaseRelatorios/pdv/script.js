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
  window.location.href = '../../../index.html';
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const removeItemButtons = document.querySelectorAll('.remove-item-btn');
const checkoutButton = document.querySelector('.checkout-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Adicionado com sucesso!');
    });
});

removeItemButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Removido com sucesso!');
    });
});

checkoutButton.addEventListener('click', () => {
    alert('Compra finalizada com sucesso!');
    history.back(); // Volta uma página atrás no histórico do navegador
});
