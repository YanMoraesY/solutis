// scenarios/getActivityByIdScenario.js

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js';  // Importando funções de validação

// Cenário de requisição GET para uma atividade específica
export default function () {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1';  // URL com o ID da atividade

    // Cabeçalhos para a requisição GET
    const params = {
        headers: {
            'accept': 'text/plain; v=1.0',
        },
    };

    // Realizando a requisição GET
    const res = http.get(url, params);

    // Validando a resposta
    validateResponse(res);
}
