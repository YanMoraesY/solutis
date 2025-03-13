**Testes Automatizados para Aplicativos Móveis com Appium**

Este repositório contém testes automatizados para aplicativos móveis, utilizando Appium em conjunto com simuladores iOS (ou dispositivos reais). O Appium é uma ferramenta de automação de testes que suporta aplicações nativas, híbridas e web, oferecendo uma interface unificada para testes móveis em diferentes plataformas (iOS e Android).

**Tecnologias Utilizadas**

Appium: Ferramenta de automação de testes para aplicativos móveis.
WebDriverIO: Interface de comando de automação para controlar o Appium.
Simuladores iOS: Utilizados para rodar os testes de forma rápida e eficaz.
Pré-Requisitos
Antes de começar, você precisa garantir que o ambiente de testes está configurado corretamente. Aqui estão os pré-requisitos:

1. Instalar Node.js
Appium e WebDriverIO requerem o Node.js. Você pode instalar o Node.js em nodejs.org.

2. Instalar Appium
Você pode instalar o Appium globalmente utilizando o npm:

npm install -g appium

3. Instalar Dependências do Projeto
Clone o repositório e instale as dependências

git clone https://github.com/seu-usuario/appium-testing.git
cd appium-testing
npm install

4. Instalar o Xcode (para iOS)
Se você estiver testando em dispositivos iOS, será necessário o Xcode, que contém os simuladores de iPhone e iPad, além de outras ferramentas de desenvolvimento para iOS. O Xcode pode ser baixado na Mac App Store.

5. Instalar o WebDriverIO
O WebDriverIO é usado para controlar o Appium. Você pode instalar o WebDriverIO e as dependências necessárias via npm:

npm install --save-dev @wdio/cli @wdio/appium-service @wdio/mocha-framework @wdio/spec-reporter

6. Iniciar o Appium Server
Para que os testes sejam executados, o servidor do Appium precisa estar em execução. Você pode iniciar o Appium com o seguinte comando:

appium
O Appium será iniciado na porta 4723 (padrão).

Estrutura do Projeto

