// cypress/pages/updateInvalidActivityPage.js
class UpdateInvalidActivityPage {
    updateInvalidActivity(id) {
        const invalidUpdatedActivity = {
            title: '',
            dueDate: 'invalid-date',
            completed: 'not-a-boolean',
        };

        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('BASE_URL')}/${id}`,
            headers: {
                'accept': 'text/plain; v=1.0',
                'Content-Type': 'application/json; v=1.0',
            },
            body: invalidUpdatedActivity,
            failOnStatusCode: false,
        });
    }
}

export default new UpdateInvalidActivityPage();
