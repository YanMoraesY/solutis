# Projeto de Testes de Carga com K6

Este projeto utiliza o **K6** para realizar testes de carga e estresse em uma API fictícia. A API simula uma lista de atividades e permite realizar operações CRUD (Create, Read, Update, Delete).

## Comando para Executar os Testes

O comando abaixo executa todos os cenários definidos para testes de carga:

```bash
k6 run index.js --vus 50 --duration 10m

Este comando executará os seguintes cinco cenários:

GET para todas as atividades.
POST para criar uma nova atividade.
GET para buscar uma atividade específica.
PUT para atualizar uma atividade existente.
DELETE para excluir uma atividade.

Explicação dos Arquivos

1. deleteActivityScenario.js
Este arquivo contém a lógica para fazer uma requisição DELETE para a URL:

https://fakerestapi.azurewebsites.net/api/v1/Activities/2

Ele exclui a atividade com o ID 2. O corpo da requisição DELETE é geralmente nulo, já que a operação de deleção não requer um payload.

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js';

export default function () {
  const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/2';

  const params = {
    headers: {
      'accept': '*/*',
    },
  };

  const res = http.del(url, null, params);
  validateResponse(res);
}

2. validation.js
Este arquivo contém a função validateResponse, que realiza verificações sobre a resposta da API. Ele garante que o status da resposta seja 200 ou 204, que são códigos esperados para operações bem-sucedidas, como a exclusão de uma atividade.

// utils/validation.js

export function validateResponse(res) {
  check(res, {
    'status code is 200 or 204': (r) => r.status === 200 || r.status === 204,
    'response time is < 1s': (r) => r.timings.duration < 1000,
  });
}

3. index.js
Este arquivo é o principal do projeto. Ele importa todos os cenários e os executa em sequência. Ele executa os seguintes cenários:

GET para todas as atividades,
POST para criar uma nova atividade,
GET para buscar uma atividade específica (ID 1),
PUT para atualizar uma atividade com ID 2,
DELETE para excluir a atividade com ID 2.

import { testConfig } from './config/testConfig.js';
import activitiesScenario from './scenarios/activitiesScenario.js';
import createActivityScenario from './scenarios/createActivityScenario.js';
import getActivityByIdScenario from './scenarios/getActivityByIdScenario.js';
import updateActivityScenario from './scenarios/updateActivityScenario.js';
import deleteActivityScenario from './scenarios/deleteActivityScenario.js';

export default function () {
  activitiesScenario();
  createActivityScenario();
  getActivityByIdScenario();
  updateActivityScenario();
  deleteActivityScenario();
}

export { testConfig };


esultados do Teste
Ao executar o comando k6 run index.js --vus 50 --duration 10m, o K6 exibirá as métricas dos testes, incluindo:

Número de requisições feitas (GET, POST, PUT e DELETE).
Status das respostas (200, 201, 204, etc.).
Tempo médio de resposta e outras métricas de desempenho.
Distribuição de latência para cada tipo de requisição.
Essas métricas são úteis para entender o desempenho da API sob carga e avaliar como ela se comporta quando várias requisições simultâneas são feitas.