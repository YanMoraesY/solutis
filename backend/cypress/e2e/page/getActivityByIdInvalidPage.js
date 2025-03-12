// cypress/pages/getActivityByIdInvalidPage.js

class GetActivityByIdInvalidPage {
    getActivityByIdInvalid(id) {
        return cy.request({
            method: 'GET',
            url: `https://fakerestapi.azurewebsites.net/api/v1/Activities/${id}`,
            headers: {
                'accept': 'text/plain; v=1.0',
            },
            failOnStatusCode: false,
        });
    }
}

export default new GetActivityByIdInvalidPage();
