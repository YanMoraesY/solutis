// cypress/pages/getActivityByIdInvalidPage.js

class GetActivityByIdInvalidPage {
    getActivityByIdInvalid(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('BASE_URL')}/${id}`,
            headers: {
                'accept': 'text/plain; v=1.0',
            },
            failOnStatusCode: false,
        });
    }
}

export default new GetActivityByIdInvalidPage();
