Feature: Deve realizar a compra de um produto

    Scenario: Adicionar item ao carrinho
        Given que o usuario tenha acessado o site
        And tenha clicado em Add to cart
        When usuario estiver no menu sacola, validar que esteja na tela correta
        Then usuario deve clicar em Proceed to checkout