import { faker } from '@faker-js/faker';
import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que o usuario tenha acessado o site", () => {
    cy.visit('https://demos.bellatrix.solutions/')
})
And("tenha clicado em Add to cart", () => {
    cy.get('.post-28 > .button').click()
    cy.get('.added_to_cart').click()
})
When("usuario estiver no menu sacola, validar que esteja na tela correta", () => {
    cy.contains('Cart').should('be.be.visible')
})
Then("usuario deve clicar em Proceed to checkout", () => {
    cy.get('.checkout-button').click()

})
Given("que o usuario esteja na tela de cadastro ", () => {
    cy.contains('Billing details').should('be.be.visible')
})

And("preencher o campo First name", () => {

    cy.get('#billing_first_name').clear().type(faker.person.firstName())
})
And("preencher o campo Last name", () => {
    cy.get('#billing_last_name').clear().type(faker.person.lastName())
})

And("selecionar o campo Country", () => {
    cy.get('#select2-billing_country-container').type("Brazil").click()
})

And("preencher o campo street address", () => {
    cy.get('#billing_address_1').clear().type('Blagoevgrad')
})
And("preencher o campo city", () => {
    cy.get('#billing_city').type('Smolyan')
})
And("preencher o campo State", () => {
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-results') // Classe do dropdown
        .should('be.visible')
        .find('li')
        .contains('Burgas')
        .click();
})
And("preencher o campo zip code", () => {
    cy.get('#billing_postcode').clear().type('06462355')
})
And("preencher o campo phone", () => {
    cy.get('#billing_phone').clear().type('11988109544')
})
And("preencher o campo Email address", () => {
    cy.get('#billing_email').clear().type(faker.internet.exampleEmail())
    cy.get('#createaccount').check()
    cy.get('#place_order').click()


})



