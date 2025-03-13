
import { testConfig } from './config/testConfig.js';  // Importando a configuração
import activitiesScenario from './scenarios/activitiesScenario.js';  // Cenário de requisição GET (todas as atividades)
import createActivityScenario from './scenarios/createActivityScenario.js';  // Cenário de requisição POST
import deleteActivityScenario from './scenarios/deleteActivityScenario.js';  // Cenário de requisição DELETE (deletar atividade)
import getActivityByIdScenario from './scenarios/getActivityByIdScenario.js';  // Cenário de requisição GET (atividade específica)
import updateActivityScenario from './scenarios/updateActivityScenario.js';  // Cenário de requisição PUT (atualizar atividade)
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function () {
    activitiesScenario();

    createActivityScenario();

    getActivityByIdScenario();

    updateActivityScenario();

    deleteActivityScenario();
}
export { testConfig };
