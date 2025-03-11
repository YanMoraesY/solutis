**Cypress Backend Testing**
Este repositório contém testes automatizados para a API de backend utilizando o Cypress. O objetivo dos testes é validar as funcionalidades da API de atividades, realizando requisições para criar, ler, atualizar e excluir atividades.

**Pré-requisitos**
Antes de começar, você precisará de:

Node.js (v14 ou superior)

Cypress instalado 

npx install cypress --save-dev

Instalação
Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório
git clone https://github.com/YanMoraesY/solutis.git
cd backend

2. Instale as dependências

npm install

3. Abra o Cypress
Para abrir a interface do Cypress e rodar os testes manualmente, use:
npx cypress open

4. Execute os testes
Para rodar os testes diretamente no terminal, use o comando abaixo:
npx cypress run

**Estrutura do Projeto**


/cypress
  ├── /e2e                  # Contém os testes de integração
  │   ├── apiTests.js       # Arquivo principal que contém os testes de API utilizando Cypress
  │
  ├── /support              # Arquivos de configuração e customização do Cypress
  │   ├── commands.js       # Comandos customizados do Cypress
  │   ├── index.js          # Arquivo de configuração global do Cypress
  │   └── plugins.js        # Plugins do Cypress configurados para o projeto
