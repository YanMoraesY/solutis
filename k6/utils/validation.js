// utils/validation.js

import { check } from 'k6';

// Função de validação que será chamada no cenário
export function validateResponse(res) {
    // Verificando se o status é 200 ou 201 (caso a criação seja bem-sucedida, o status pode ser 201)
    check(res, {
        'status é 200 ou 201': (r) => r.status === 200 || r.status === 201,
    });

    // Verificando se o tempo de resposta é abaixo de 1 segundo
    check(res, {
        'tempo de resposta é abaixo de 1s': (r) => r.timings.duration < 1000,
    });
}
