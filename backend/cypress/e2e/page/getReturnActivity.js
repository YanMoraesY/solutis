

class getReturnActivity {
    getReturnActivity(activityId) {
        const getReturnActivity = {
            title: "Atividade Atualizada",
            dueDate: "2025-03-10T21:58:07.21Z",
            completed: true
        };

        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities',
            headers: { 'accept': 'text/plain; v=1.0' },

        });
    }
}

export default new getReturnActivity();
