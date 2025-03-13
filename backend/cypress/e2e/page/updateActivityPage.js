class UpdateActivityPage {
    updateActivity(activityId) {
        const updatedActivity = {
            title: "Atividade Atualizada",
            dueDate: "2025-03-10T21:58:07.21Z",
            completed: true
        };

        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('BASE_URL')}/${activityId}`,
            headers: {
                'accept': 'text/plain; v=1.0',
                'Content-Type': 'application/json; v=1.0'
            },
            body: updatedActivity,
        });
    }
}

export default new UpdateActivityPage();
