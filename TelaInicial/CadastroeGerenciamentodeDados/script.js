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
  window.location.href = '../../index.html';
});



// Links de cadastro de produtos
var cadastrarProdutosLinks = document.querySelectorAll('.produtocadastrar');
cadastrarProdutosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'produtos/produtosCadastrar/index.html';
  });
});

var consultarProdutosLinks = document.querySelectorAll('.produtoconsultar');
consultarProdutosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'produtos/produtosConsultar/index.html';
  });
});

// Links de cadastro de clientes
var cadastrarClientesLinks = document.querySelectorAll('.clientescadastrar');
cadastrarClientesLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'clientes/clientescadastrar/index.html';
  });
});

var consultarClientesLinks = document.querySelectorAll('.clientesconsultar');
consultarClientesLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'clientes/clientesconsultar/index.html';
  });
});

// Links de cadastro de operações fiscais
var cadastrarOperacoesLinks = document.querySelectorAll('.operacoesfiscaiscadastrar');
cadastrarOperacoesLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'operacoesfiscais/operacoesfiscaiscadastro/index.html';
  });
});

var consultarOperacoesLinks = document.querySelectorAll('.operacoesfiscaisconsultar');
consultarOperacoesLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'operacoesfiscais/operacoesfiscaisconsulta/index.html';
  });
});

// Links de cadastro de empresas
var cadastrarEmpresasLinks = document.querySelectorAll('.empresascadastrar');
cadastrarEmpresasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'empresas/empresascadastrar/index.html';
  });
});

var consultarEmpresasLinks = document.querySelectorAll('.empresasconsultar');
consultarEmpresasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'empresas/empresasconsultar/index.html';
  });
});

// Links de cadastro de fornecedores
var cadastrarFornecedoresLinks = document.querySelectorAll('.fornecedorescadastrar');
cadastrarFornecedoresLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'fornecedores/fornecedorescadastrar/index.html';
  });
});

var consultarFornecedoresLinks = document.querySelectorAll('.fornecedoresconsultar');
consultarFornecedoresLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'fornecedores/fornecedoresconsultar/index.html';
  });
});

// Links de cadastro de plano de contas
var cadastrarPlanoContasLinks = document.querySelectorAll('.planodecontascadastrar');
cadastrarPlanoContasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'planodecontas/planodecontascadastrar/index.html';
  });
});

var consultarPlanoContasLinks = document.querySelectorAll('.planodecontasconsultar');
consultarPlanoContasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'planodecontas/planodecontasconsultar/index.html';
  });
});

// Links de cadastro de serviços
var cadastrarServicosLinks = document.querySelectorAll('.servicoscadastrar');
cadastrarServicosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'servicos/servicoscadastrar/index.html';
  });
});

var consultarServicosLinks = document.querySelectorAll('.servicosconsultar');
consultarServicosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'servicos/servicosconsultar/index.html';
  });
});

// Links de cadastro de funcionários
var cadastrarFuncionariosLinks = document.querySelectorAll('.funcionarioscadastrar');
cadastrarFuncionariosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'funcionarios/funcionarioscadastrar/index.html';
  });
});

var consultarFuncionariosLinks = document.querySelectorAll('.funcionariosconsultar');
consultarFuncionariosLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'funcionarios/funcionariosconsultar/index.html';
  });
});

// Links de cadastro de transportadoras
var cadastrarTransportadorasLinks = document.querySelectorAll('.transportadorascadastrar');
cadastrarTransportadorasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'transportadoras/transportadorascadastrar/index.html';
  });
});

var consultarTransportadorasLinks = document.querySelectorAll('.transportadorasconsultar');
consultarTransportadorasLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'transportadoras/transportadorasconsultar/index.html';
  });
});
