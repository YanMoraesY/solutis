import { faker } from '@faker-js/faker'

import homePage from '../../../pages/homePage'

import checkoutPage from '../../../pages/checkoutPage'

const preencherCampo = (campo, valor) => {
    cy.get(campo).clear().type(valor).should('have.value', valor);
}

Given("Deve preencher os dados para cadastros ", () => {
    checkoutPage.restoreLocalStorage();  // Garantindo que a última URL seja carregada

    checkoutPage.validateBillingDetailsPage()
})

And("preencher o campo First name", () => {
    checkoutPage.fillBillingFirstName()
})

And("preencher o campo Last name", () => {
    checkoutPage.fillBillingLastName()
})

And("selecionar o campo Country", () => {
    checkoutPage.selectCountry()
})

And("preencher o campo street address", () => {
    checkoutPage.fillStreetAddress()
})

And("preencher o campo city", () => {
    checkoutPage.fillCity()
})

And("preencher o campo State", () => {
    checkoutPage.selectState()
})

And("preencher o campo zip code", () => {
    checkoutPage.fillZipCode()
})

And("preencher o campo phone", () => {
    checkoutPage.fillPhone()
})

And("preencher o campo Email address", () => {
    checkoutPage.fillEmail()
    // checkoutPage.checkCreateAccount()
    checkoutPage.placeOrder()
})

