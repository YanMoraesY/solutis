import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given("teste", () => {
    cy.log("Validando o acesso à API...");
});

// // When: Realiza a requisição GET
// When("eu faço uma requisição GET para {string}", (endpoint) => {
//     cy.request({
//         method: "GET",
//         url: `https://fakerestapi.azurewebsites.net/api/v1${endpoint}`,
//         headers: { accept: "text/plain; v=1.0" },
//     }).then((res) => {
//         resposta = res; // Armazena a resposta para validação
//     });
// });

// // Then: Valida se a resposta contém atividades
// Then("a resposta deve conter uma lista de atividades", () => {
//     expect(resposta.body).to.be.an("array").and.not.be.empty;
// });

// // Then: Valida o status HTTP da resposta
// Then("o status da resposta deve ser {int}", (statusCode) => {
//     expect(resposta.status).to.eq(statusCode);
// });
