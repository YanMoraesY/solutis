// cypress/pages/getActivityByIdPage.js
class GetActivityByIdPage {
    getActivityById(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('BASE_URL')}/${id}`,
            headers: {
                'accept': 'text/plain; v=1.0',
            },
        });
    }
}

export default new GetActivityByIdPage();
