// cypress/pages/deleteActivityPage.js
class DeleteActivityPage {
    deleteActivity(id) {
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('BASE_URL')}/${id}`,
            headers: {
                'accept': '*/*',
            },
            failOnStatusCode: false,
        });
    }
}

export default new DeleteActivityPage();
