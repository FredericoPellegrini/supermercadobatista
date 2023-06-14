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

var cadastrarLinks = document.querySelectorAll('.produtoconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'produtos/produtosConsultar/index.html';
  });
});

//Links de cadastro de clientes
var cadastrarLinks = document.querySelectorAll('.clientescadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'clientes/clientescadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.clientesconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'clientes/clientesconsultar/index.html';
  });
});

//Links de cadastro de clientes
var cadastrarLinks = document.querySelectorAll('.operacoesfiscaiscadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'operacoesfiscais/operacoesfiscaiscadastro/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.operacoesfiscaisconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'operacoesfiscais/operacoesfiscaisconsulta/index.html';
  });
});

======================================================================================

// Empresas
var cadastrarLinks = document.querySelectorAll('empresascadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'empresas/empresascadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.empresasconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'empresas/empresasconsultar/index.html';
  });
});

//Fornecedores
var cadastrarLinks = document.querySelectorAll('.fornecedorescadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'fornecedores/fornecedorescadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.fornecedoresconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'fornecedores/fornecedoresconsultar/index.html';
  });
});

//Plano de contas
var cadastrarLinks = document.querySelectorAll('.planodecontascadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'planodecontas/planodecontascadastro/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.planodecontasconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'planodecontas/planodecontasconsulta/index.html';
  });
});

================================================================================================================+
// Serviços
var cadastrarLinks = document.querySelectorAll('servicoscadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'servicos/servicoscadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('servicosconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'servicos/servicosconsultar/index.html';
  });
});

//Funcionarios
var cadastrarLinks = document.querySelectorAll('.funcionarioscadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'funcionarios/funcionarioscadastrar/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.funcionariosconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'funcionarios/funcionariosconsultar/index.html';
  });
});

//Transportadora
var cadastrarLinks = document.querySelectorAll('.transportadoracadastrar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'transportadora/transportadoracadastro/index.html';
  });
});

var cadastrarLinks = document.querySelectorAll('.transportadoraconsultar');
cadastrarLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'transportadora/transportadoraconsulta/index.html';
  });
});
