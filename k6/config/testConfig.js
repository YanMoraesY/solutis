export const testConfig = {
    stages: [
        { duration: '1m', target: 50 },  // 50 usuários virtuais por 1 minuto
        { duration: '2m', target: 100 }, // 100 usuários virtuais por 2 minutos
        { duration: '3m', target: 200 }, // 200 usuários virtuais por 3 minutos
        { duration: '2m', target: 0 },   // Reduzindo para 0 usuários ao longo de 2 minutos
    ],
};