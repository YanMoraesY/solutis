// scenarios/createActivityScenario.js

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js';  // Importando funções de validação

// Cenário de requisição POST
export default function () {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

    // Dados que serão enviados no corpo da requisição
    const payload = JSON.stringify({
        id: 1,
        title: "string",
        dueDate: "2025-03-10T21:50:39.316Z",
        completed: true,
    });

    // Cabeçalhos para a requisição POST
    const params = {
        headers: {
            'accept': 'text/plain; v=1.0',
            'Content-Type': 'application/json; v=1.0',
        },
    };

    // Realizando a requisição POST
    const res = http.post(url, payload, params);

    // Validando a resposta
    validateResponse(res);
}
