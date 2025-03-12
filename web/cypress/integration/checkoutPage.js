import homePage from '../pages/homePage'
import cartPage from '../pages/cartPage'
import checkoutPage from '../pages/checkoutPage'
import CheckoutPage from './checkoutPage';


beforeEach(() => {
    // Restaurar o estado do carrinho a partir do localStorage antes de cada teste
    cy.window().then((window) => {
        const cartState = window.localStorage.getItem('cart');

        if (cartState) {
            window.localStorage.setItem('cart', cartState); // Restaurar o carrinho se necessário
        } else {
            console.log('Carrinho não encontrado no localStorage');
        }
    });

    // Restaurar a URL da última página visitada (se houver)
    CheckoutPage.restoreLocalStorage();
})
Given("que o usuario tenha acessado o site", () => {
    homePage.visit('checkout')
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
