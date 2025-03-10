Feature: Testes de API - Activities

    Scenario: Buscar lista de atividades
        Given teste
        When eu faço uma requisição GET para "/Activities"
        Then a resposta deve conter uma lista de atividades
        And o status da resposta deve ser 200
