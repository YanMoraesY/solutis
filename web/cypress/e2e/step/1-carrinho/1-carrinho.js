import { faker } from '@faker-js/faker'


import homePage from '../../../pages/homePage'
import cartPage from '../../../pages/cartPage'

Given("que o usuario tenha acessado o site", () => {
    homePage.visit('')
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
