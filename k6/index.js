
import { testConfig } from './config/testConfig.js';  // Importando a configuração
import activitiesScenario from './scenarios/activitiesScenario.js';  // Cenário de requisição GET (todas as atividades)
import createActivityScenario from './scenarios/createActivityScenario.js';  // Cenário de requisição POST
import deleteActivityScenario from './scenarios/deleteActivityScenario.js';  // Cenário de requisição DELETE (deletar atividade)
import getActivityByIdScenario from './scenarios/getActivityByIdScenario.js';  // Cenário de requisição GET (atividade específica)
import updateActivityScenario from './scenarios/updateActivityScenario.js';  // Cenário de requisição PUT (atualizar atividade)

// Função `default` chamada pelo K6
export default function () {
    // Cenário GET (todas as atividades)
    activitiesScenario();

    // Cenário POST

    createActivityScenario();

    // Cenário GET para uma atividade específica
    getActivityByIdScenario();

    // // Cenário PUT (atualizar uma atividade específica)
    updateActivityScenario();

    // // Cenário DELETE (deletar uma atividade)
    deleteActivityScenario();
}

export { testConfig };  // Exportando a configuração para ser usada no K6
