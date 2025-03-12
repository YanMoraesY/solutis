// describe('Testes de API - GET Activities', () => {

//   it('Deve retornar status 200 e uma lista de atividades', () => {
//     cy.request({
//       method: 'GET',
//       url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities', // URL da API
//       headers: {
//         'accept': 'text/plain; v=1.0', // Cabeçalho da requisição
//       },
//     }).then((response) => {
//       // Verifica se o status da resposta é 200
//       expect(response.status).to.eq(200);

//       // Verifica se a resposta é um array
//       expect(response.body).to.be.an('array');

//       // Se for esperado que a lista de atividades tenha um formato específico, pode-se verificar:
//       if (response.body.length > 0) {
//         expect(response.body[0]).to.have.all.keys('id', 'title', 'dueDate', 'completed');
//       }
//     });
//   });

//   it('Deve criar uma nova atividade com status 200', () => {
//     // Criação de dados aleatórios para a nova atividade
//     const newActivity = {
//       id: Math.floor(Math.random() * 1000), // Gera um ID aleatório
//       title: "Nova Atividade",
//       dueDate: "2025-03-10T21:50:39.316Z",
//       completed: true
//     };

//     cy.request({
//       method: 'POST',
//       url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities', // URL da API
//       headers: {
//         'accept': 'text/plain; v=1.0',
//         'Content-Type': 'application/json; v=1.0'
//       },
//       body: newActivity // Corpo da requisição
//     }).then((response) => {

//       expect(response.status).to.eq(200);

//       expect(response.body).to.include({
//         title: newActivity.title,
//         dueDate: newActivity.dueDate,
//         completed: newActivity.completed
//       });

//       expect(response.body).to.have.property('id');
//     });
//   })

//   it('Deve retornar a atividade com ID 1', () => {

//     cy.request({
//       method: 'GET',
//       url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1', // URL da API com ID 1
//       headers: {
//         'accept': 'text/plain; v=1.0', // Cabeçalho de aceitação
//       }
//     }).then((response) => {
//       // Log da resposta para depuração
//       console.log(response);

//       // Verifica se o status da resposta é 200 (OK)
//       expect(response.status).to.eq(200);

//       // Verifica se o corpo da resposta contém os dados da atividade
//       expect(response.body).to.have.property('id', 1); // Verifica se o ID é 1
//       expect(response.body).to.have.property('title'); // Verifica se existe o campo 'title'
//       expect(response.body).to.have.property('dueDate'); // Verifica se existe o campo 'dueDate'
//       expect(response.body).to.have.property('completed'); // Verifica se existe o campo 'completed'
//     });
//   });

//   it('Deve atualizar a atividade com ID 2', () => {
//     const updatedActivity = {
//       id: 2, // ID da atividade a ser atualizada
//       title: "Atividade Atualizada",
//       dueDate: "2025-03-10T21:58:07.210Z", // Data com 3 casas decimais
//       completed: true
//     };

//     cy.request({
//       method: 'PUT',
//       url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities/2', // URL da API para atualizar a atividade com ID 2
//       headers: {
//         'accept': 'text/plain; v=1.0', // Cabeçalho de aceitação
//         'Content-Type': 'application/json; v=1.0' // Cabeçalho de Content-Type
//       },
//       body: updatedActivity // Corpo da requisição com os dados atualizados
//     }).then((response) => {
//       // Log da resposta para depuração
//       console.log(response);

//       // Verifica se o status da resposta é 200 (OK), indicando que a atualização foi bem-sucedida
//       expect(response.status).to.eq(200);

//       // Verifica se o id retornado na resposta corresponde ao id enviado na requisição
//       expect(response.body).to.have.property('id', updatedActivity.id);

//       // Comparar as datas ignorando a precisão dos milissegundos
//       const returnedDueDate = new Date(response.body.dueDate).toISOString();
//       const expectedDueDate = new Date(updatedActivity.dueDate).toISOString();

//       // Verifica se as duas datas são iguais, ignorando a precisão dos milissegundos
//       expect(returnedDueDate.slice(0, 19)).to.eq(expectedDueDate.slice(0, 19));

//       // Verifica se o title e o completed foram atualizados corretamente
//       expect(response.body).to.have.property('title', updatedActivity.title);
//       expect(response.body).to.have.property('completed', updatedActivity.completed);
//     });
//   });

//   it('Deve excluir a atividade com ID 2', () => {

//     cy.request({
//       method: 'DELETE',
//       url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities/2',
//       headers: {
//         'accept': '*/*',
//       },
//       failOnStatusCode: false
//     }).then((response) => {
//       console.log(response);

//       expect(response.status).to.eq(200);

//       expect(response.body).to.be.empty;
//     });
//   });

// });
