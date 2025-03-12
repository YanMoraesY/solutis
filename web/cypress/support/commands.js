// cypress/support/commands.js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    options = options || {}
    if (!options.localStorage) {
        options.localStorage = {}
    }
    options.localStorage.preserve = true

    return originalFn(url, options)
});

