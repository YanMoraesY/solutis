**Cypress Web Testing**
Repositório para testes automatizados em uma aplicação web usando Cypress.

**Pré-requisitos**
Node.js (v14 ou superior)

Cypress (instalado via npm)

Instalação
git clone https://github.com/YanMoraesY/solutis.git


**Instale as dependências:**

npm install

Abra o Cypress:
 npx cypress open


**Testes de Compra de Produto**
Este repositório contém testes automatizados para o processo de compra de um produto, desde a adição ao carrinho até o preenchimento dos dados para cadastro.

**Funcionalidades Testadas**
1. Adicionar item ao carrinho
Cenário:

Dado que o usuário acessou o site
E clicou em "Add to cart"
Quando o usuário estiver no menu sacola, validar que ele está na tela correta
Então o usuário deve clicar em "Proceed to checkout"
2. Preencher dados para cadastro
Cenário:

Dado que o usuário esteja na tela de cadastro
E preenche os campos obrigatórios, incluindo:
First name
Last name
Country
Street address
City
State
Zip code
Phone
Email address