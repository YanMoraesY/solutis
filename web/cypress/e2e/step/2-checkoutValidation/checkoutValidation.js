import checkoutPage from '../../../pages/checkoutPage'

const preencherCampo = (campo, valor) => {
    cy.get(campo).clear().type(valor).should('have.value', valor);
}

Given("que o usuario esteja na tela de Detalhes de cobrança", () => {
    checkoutPage.restoreLocalStorage();

    checkoutPage.validateBillingDetailsPage()
})
When("preencher todos os campos da tela de cadastro", () => {
    checkoutPage.fillBillingFirstName()
    checkoutPage.fillBillingLastName()
    checkoutPage.selectCountry()
    checkoutPage.fillStreetAddress()
    checkoutPage.fillCity()
    checkoutPage.selectState()
    checkoutPage.fillZipCode()
    checkoutPage.fillPhone()
    checkoutPage.fillEmail()
})
beforeEach(() => {
    cy.restoreLocalStorage();
});

afterEach(() => {
    cy.saveLocalStorage();
});
And("que o valor do produto seja o mesmo de 60 reais", () => {
    checkoutPage.valueTotal()
    checkoutPage.placeOrder()
    checkoutPage.date()
    checkoutPage.paymentMethod()

})
