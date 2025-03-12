// cypress/pages/getActivityByIdPage.js
class GetActivityByIdPage {
    getActivityById(id) {
        return cy.request({
            method: 'GET',
            url: `https://fakerestapi.azurewebsites.net/api/v1/Activities/${id}`,
            headers: {
                'accept': 'text/plain; v=1.0',
            },
        });
    }
}

export default new GetActivityByIdPage();
