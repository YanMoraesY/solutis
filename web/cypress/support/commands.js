// cypress/support/commands.js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    options = options || {}
    if (!options.localStorage) {
        options.localStorage = {}
    }

    // Define que o Cypress não deve limpar o localStorage entre os testes
    options.localStorage.preserve = true

    return originalFn(url, options)
});

