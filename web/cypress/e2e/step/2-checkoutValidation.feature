Feature: Processo de Compra de Produto

    Scenario: Preencher informações pessoais para concluir a compra
        Dado que o usuario esteja na tela de Detalhes de cobrança
        When preencher todos os campos da tela de cadastro
        And que o valor do produto seja o mesmo de 60 reais