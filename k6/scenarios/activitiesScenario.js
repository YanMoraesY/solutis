// scenarios/activitiesScenario.js

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js'; // Importando funções de validação

export default function () {
  // Fazendo a requisição GET para a URL
  const res = http.get('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
    headers: { 'accept': 'text/plain; v=1.0' },
  });
  //
  // Validando a resposta
  validateResponse(res);
}
