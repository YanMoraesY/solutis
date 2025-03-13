// cypress/pages/createInvalidActivityPage.js
class CreateInvalidActivityPage {
    createInvalidActivity() {
        const invalidActivity = {
            title: '',
            dueDate: 'invalid-date',
            completed: 'not-a-boolean',
        };

        return cy.request({
            method: 'POST',
            url: `${Cypress.env('BASE_URL')}`,
            headers: {
                'accept': 'text/plain; v=1.0',
                'Content-Type': 'application/json; v=1.0',
            },
            body: invalidActivity,
            failOnStatusCode: false,
        });
    }
}

export default new CreateInvalidActivityPage();
