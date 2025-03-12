import { should } from "chai"

class HomePage {

    visit(path) {
        cy.visit(`https://demos.bellatrix.solutions/${path}`)
    }

    clickAddToCart() {
        cy.contains('50.00').should('be.visible')
        cy.get('.post-28 > .button').click()
        cy.window().then((window) => {
            const cartState = window.localStorage.getItem('cart');
            cy.wrap(cartState).as('cartState');
        });

    }
    goToCart() {
        cy.get('.added_to_cart').click()

    }
}

export default new HomePage()
