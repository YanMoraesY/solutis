Feature: Deve realizar a compra de um produto

    Scenario: Adicionar item ao carrinho
        Given que o usuario tenha acessado o site
        And tenha clicado em Add to cart
        When usuario estiver no menu sacola, validar que esteja na tela correta
        Then usuario deve clicar em Proceed to checkout

    Scenario: Deve preencher os dados para cadastros
        Dado que o usuario esteja na tela de cadastro
        And preencher o campo First name
        And preencher o campo Last name
        And selecionar o campo Country
        And preencher o campo street address
        And preencher o campo city
        And preencher o campo State
        And preencher o campo zip code
        And preencher o campo phone
        And preencher o campo Email address
# Scenario: Cadastro Usuario
#     Given que o usuario tenha acessado o site
#     And tenha clicado em Register
#     When carregar a tela para registrar usuario
#     And deve selecionar o sexo Masculino
#     And preencher o primeiro nome
#     And preencher o ultimo nome
#     And preencher o campo email
#     And preencher a senha
#     And Confirmar a senha
#     When clicar em Register
#     Then deve validar a mensagem 'Seu cadastro foi concluído'

# Scenario: Adicionar um produto na sacola e efetuar a compra
#     Given que o usuario tenha acessado o site
#     And que o usuario deseja realizar a busca por um item
#     And e que efetue o clique em Add to cart
#     And deve clicar em shopping cart
#     When carregar a tela Shooping cart
#     Then usuario deve clicar em checkout
#     When usuario for transferido para a tela de Welcome, Please Sigin In
#     Then deve preencher os dados de login
#     And usuario clique novamente em checkout

# Scenario: Preencher informacoes de Endereço de Cobrança
#     Given que o usuario esteja na tela de Endereço de Cobrança
#     And deve preencher as informacoes de endereco de cobranca

