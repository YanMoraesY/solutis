// cypress/support/commands.js
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    options = options || {}
    if (!options.localStorage) {
        options.localStorage = {}
    }
    options.localStorage.preserve = true

    return originalFn(url, options)
});


// Salvar o estado do localStorage após o teste
Cypress.Commands.add('saveLocalStorage', () => {
    cy.window().then((window) => {
        window.localStorage.setItem('lastUrl', window.location.href);
        window.localStorage.setItem('cart', JSON.stringify(window.localStorage.getItem('cart')));
    });
});
// Restaurar o localStorage antes de cada teste
Cypress.Commands.add('restoreLocalStorage', () => {
    cy.window().then((window) => {
        const cartState = window.localStorage.getItem('cart');
        if (cartState) {
            window.localStorage.setItem('cart', cartState);
        }

        const lastUrl = window.localStorage.getItem('lastUrl');
        if (lastUrl) {
            cy.visit(lastUrl);
        }
    });
});

Cypress.Commands.add('saveLocalStorageToFile', () => {
    cy.window().then((window) => {
        const localStorageState = window.localStorage.getItem('cart');
        cy.writeFile('cypress/fixtures/cartState.json', { cart: localStorageState });
    });
});

Cypress.Commands.add('restoreLocalStorageFromFile', () => {
    cy.readFile('cypress/fixtures/cartState.json').then((localStorageState) => {
        if (localStorageState && localStorageState.cart) {
            cy.window().then((window) => {
                window.localStorage.setItem('cart', localStorageState.cart);
            });
        }
    });
});


