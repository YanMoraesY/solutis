Feature: Processo de Compra de Produto

    Scenario: Adicionar um produto ao carrinho de compras
        Given que o usuario tenha acessado o site
        When selecionar um produto
        And tenha clicado em Add to cart
        When usuario estiver no menu sacola, validar que esteja na tela correta
        Then usuario deve clicar em Proceed to checkout