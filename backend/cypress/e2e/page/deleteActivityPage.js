// cypress/pages/deleteActivityPage.js
class DeleteActivityPage {
    deleteActivity(id) {
        return cy.request({
            method: 'DELETE',
            url: `https://fakerestapi.azurewebsites.net/api/v1/Activities/${id}`,
            headers: {
                'accept': '*/*',
            },
            failOnStatusCode: false,
        });
    }
}

export default new DeleteActivityPage();
