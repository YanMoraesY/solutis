class CartPage {
    validateCartPage() {
        cy.contains('Cart').should('be.visible')
    }

    proceedToCheckout() {
        cy.get('.checkout-button').click()
    }
}

export default new CartPage()
