describe('Login test', () => {
    before(() => {
      cy.visit('http://localhost:8080/login');
    });
    it('Can login', () => {
      cy.get('[data-type="email"]').clear().type('test@test.test').should('have.value', 'test@test.test');
      cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest')
  
      cy.get('[type="submit"]').click();

    });
  })