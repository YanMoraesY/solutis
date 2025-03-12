class CartPage {
    validateCartPage() {
        cy.contains('Cart').should('be.visible')
    }

    proceedToCheckout() {
        // Função para salvar o estado do carrinho
        function saveCartState() {
            cy.window().then((window) => {
                const cartState = window.localStorage.getItem('cart');
                if (cartState) {
                    window.localStorage.setItem('cart', cartState);
                } else {
                    console.log("Carrinho não encontrado no localStorage");
                }
            });
        }

        cy.get('.checkout-button').click()
        cy.visit(`https://demos.bellatrix.solutions/checkout`)

    }

}

export default new CartPage()
