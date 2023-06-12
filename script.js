document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Redirecionar para a página inicial após o login
    window.location.href = "pagina-inicial.html";
});
