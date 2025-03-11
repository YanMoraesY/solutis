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
