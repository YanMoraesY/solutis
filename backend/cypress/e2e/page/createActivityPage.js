// cypress/pages/createActivityPage.js
import { faker } from '@faker-js/faker';

class CreateActivityPage {
    createValidActivity() {
        const newActivity = {
            title: faker.lorem.sentence(),
            dueDate: faker.date.future().toISOString(),
            completed: faker.datatype.boolean(),
        };

        return cy.request({
            method: 'POST',
            url: Cypress.env('BASE_URL'),
            headers: {
                'accept': 'text/plain; v=1.0',
                'Content-Type': 'application/json; v=1.0',
            },
            body: newActivity,
        });
    }
}

export default new CreateActivityPage();
