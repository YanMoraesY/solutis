import { faker } from '@faker-js/faker'

class CheckoutPage {

    saveLocalStorage() {
        cy.window().then((window) => {
            window.localStorage.setItem('lastUrl', window.location.href);
        });
    }
    restoreLocalStorage() {
        cy.window().then((window) => {
            const lastUrl = window.localStorage.getItem('lastUrl');
            if (lastUrl) {
                cy.visit(lastUrl);
            }
        });
    }
    validateBillingDetailsPage() {
        cy.contains('Billing details').should('be.visible')
    }
    fillBillingFirstName() {
        cy.visit('https://demos.bellatrix.solutions/checkout')
        this.restoreLocalStorage();
        const firstName = faker.person.firstName();
        cy.get('#billing_first_name').clear().type(faker.person.firstName())
        cy.get('#billing_first_name').clear().type(firstName);
        cy.get('#billing_first_name').should('have.value', firstName);
    }
    fillBillingLastName() {
        cy.get('#billing_last_name').clear().type(faker.person.lastName())
    }
    selectCountry() {
        cy.get('#select2-billing_country-container').type("Brazil").click()
    }
    fillStreetAddress() {
        cy.get('#billing_address_1').clear().type('Blagoevgrad')
    }
    fillCity() {
        cy.get('#billing_city').type('Smolyan')
    }
    selectState() {
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-results')
            .should('be.visible')
            .find('li')
            .contains('Burgas')
            .click();
    }
    fillZipCode() {
        cy.get('#billing_postcode').clear().type('06462355')
    }
    fillPhone() {
        cy.get('#billing_phone').clear().type('11988109544')
    }
    fillEmail() {
        cy.get('#billing_email').clear().type(faker.internet.exampleEmail())
    }
    checkCreateAccount() {
        cy.get('#createaccount').check()
    }
    valueTotal() {
        cy.get('strong > .woocommerce-Price-amount > bdi').should('be.be.visible')
    }
    placeOrder() {
        cy.get('#place_order').click({ force: true })
    }
}

export default new CheckoutPage()
