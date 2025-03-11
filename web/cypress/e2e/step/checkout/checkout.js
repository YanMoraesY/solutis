import { faker } from '@faker-js/faker'


import homePage from '../../../pages/homePage'
import cartPage from '../../../pages/cartPage'
import checkoutPage from '../../../pages/checkoutPage'
import OrderPage from '../../../pages/OrderPage'


Given("que o usuario tenha acessado o site", () => {
    homePage.visit()
})

And("tenha clicado em Add to cart", () => {
    homePage.clickAddToCart()
    homePage.goToCart()
})

When("usuario estiver no menu sacola, validar que esteja na tela correta", () => {
    cartPage.validateCartPage()
})

Then("usuario deve clicar em Proceed to checkout", () => {
    cartPage.proceedToCheckout()
})

Given("que o usuario esteja na tela de cadastro ", () => {
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
    checkoutPage.checkCreateAccount()
    checkoutPage.placeOrder()
})
