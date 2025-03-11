class HomePage {
    visit() {
        cy.visit('https://demos.bellatrix.solutions/')
    }

    clickAddToCart() {
        cy.get('.post-28 > .button').click()
    }

    goToCart() {
        cy.get('.added_to_cart').click()
    }
}

export default new HomePage()
