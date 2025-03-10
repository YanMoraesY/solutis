// scenarios/deleteActivityScenario.js

import http from 'k6/http';
import { check } from 'k6';
import { validateResponse } from '../utils/validation.js';  // Importando funções de validação

// Cenário de requisição DELETE para excluir a atividade com ID 2
export default function () {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/5';  // URL para deletar a atividade com ID 2

    // Cabeçalhos para a requisição DELETE
    const params = {
        headers: {
            'accept': '*/*',
        },
    };
    // Realizando a requisição DELETE
    const res = http.del(url, null, params);  // O corpo da requisição DELETE geralmente é nulo

    // Validando a resposta
    validateResponse(res);
}
