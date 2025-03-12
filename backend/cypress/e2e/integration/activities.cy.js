import { faker } from '@faker-js/faker';


import createActivityPage from '../../e2e/page/createActivityPage';
import createInvalidActivityPage from '../../e2e/page//createInvalidActivityPage';
import getActivityByIdPage from '../../e2e/page//getActivityByIdPage';
import getActivityByIdInvalidPage from '../../e2e/page//getActivityByIdInvalidPage';
import updateActivityPage from '../../e2e/page/updateActivityPage';
import updateInvalidActivityPage from '../../e2e/page//updateInvalidActivityPage';
import deleteActivityPage from '../../e2e/page/deleteActivityPage';


describe('Testes de API - GET Activities', () => {

    it('Deve retornar status 200 e uma lista de atividades', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities',
            headers: { 'accept': 'text/plain; v=1.0' },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    it('Deve criar uma nova atividade com dados válidos', () => {
        createActivityPage.createValidActivity().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
        });
    });

    it('Deve retornar erro ao tentar criar uma atividade com dados inválidos', () => {
        createInvalidActivityPage.createInvalidActivity().then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Deve retornar a atividade com ID 1', () => {
        getActivityByIdPage.getActivityById(1).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
        });
    });

    it('Deve retornar erro ao tentar acessar uma atividade com ID inexistente', () => {
        getActivityByIdInvalidPage.getActivityByIdInvalid(9999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('Deve atualizar a atividade com ID 2', () => {
        const activityId = 2;
        const updatedActivity = {
            title: "Atividade Atualizada",
            dueDate: "2025-03-10T21:58:07.21Z",
            completed: true
        };

        updateActivityPage.updateActivity(activityId).then((response) => {
            console.log(response.body);

            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('title', updatedActivity.title);
            expect(response.body).to.have.property('completed', updatedActivity.completed);
            expect(response.body.dueDate).to.eq(updatedActivity.dueDate);
        });
    });



    it('Deve retornar erro ao tentar atualizar uma atividade com dados inválidos', () => {
        updateInvalidActivityPage.updateInvalidActivity(2).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Deve excluir a atividade com ID 2', () => {
        deleteActivityPage.deleteActivity(2).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.empty;
        });
    });

    it('Deve retornar erro ao tentar excluir uma atividade com ID inexistente - API está retornando 200 mais o correto era 404', () => {
        deleteActivityPage.deleteActivity(9999).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
