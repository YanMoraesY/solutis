// scenarios/updateActivityScenario.js

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js';  // Importando funções de validação

// Cenário de requisição PUT para atualizar a atividade com ID 2
export default function () {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1';  // URL para atualizar a atividade com ID 2

    // Dados que serão enviados no corpo da requisição PUT
    const payload = JSON.stringify({
        id: 2,
        title: "string",
        dueDate: "2025-03-10T21:58:07.210Z",
        completed: true,
    });

    // Cabeçalhos para a requisição PUT
    const params = {
        headers: {
            'accept': 'text/plain; v=1.0',
            'Content-Type': 'application/json; v=1.0',
        },
    };

    // Realizando a requisição PUT
    const res = http.put(url, payload, params);

    // Validando a resposta
    validateResponse(res);
}
