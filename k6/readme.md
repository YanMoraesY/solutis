# Projeto de Testes de Carga com K6

Este projeto utiliza o **K6** para realizar testes de carga e estresse em uma API fictícia. A API simula uma lista de atividades e permite realizar operações CRUD (Create, Read, Update, Delete).

## Comando para Executar os Testes

O comando abaixo executa todos os cenários definidos para testes de carga:

```bash
instalar dependencias: npm install
Executar: k6 run index.js --vus 50 --duration 10m


**Conclusões**

Qualidade da API: A API testada está funcionando corretamente com os principais fluxos de trabalho (GET, POST, PUT, DELETE), retornando os status esperados e mantendo a integridade dos dados.
Desempenho: O desempenho geral foi bom, com a maioria das requisições completadas dentro do tempo adequado. Há uma pequena margem para melhorias em relação ao tempo de resposta, especialmente nas requisições de criação e atualização.
Recomendações:
Ajustes no desempenho: Embora a maioria dos testes tenha sido bem-sucedida, seria interessante investigar as requisições POST e PUT que excederam o tempo de resposta de 1 segundo.
Monitoramento contínuo: Realizar testes periódicos para garantir que a performance da API continue adequada durante mudanças no sistema ou aumentos na carga.
K6: 
Conclusões e Recomendações referente a execução do K6
Pontos Positivos:

A alta taxa de sucesso de 90% e a baixa taxa de falhas indicam que a aplicação está funcionando bem para a maioria das requisições.
O teste foi capaz de simular uma carga significativa sem falhas de servidor.
Áreas para Melhoria:

A taxa de falhas de 10% e os tempos de resposta que excedem 1 segundo para 10% das requisições são pontos de atenção. Aumentar a capacidade de resposta do servidor ou investigar as causas das requisições lentas seria essencial para melhorar a performance.
O tempo máximo de resposta de 2.87 s é considerável e pode impactar a experiência do usuário, especialmente em cenários de alto tráfego.
Recomenda-se realizar mais testes focados no tempo de resposta das requisições mais lentas e investigar o impacto de picos de carga ou alta latência na performance do servidor.