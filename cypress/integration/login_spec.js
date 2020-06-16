describe('Login test', () => {
    before(() => {
      cy.visit('/login');
    });
    it('Can login', () => {
      cy.get('[data-type="email"]').clear().type('test@test.test').should('have.value', 'test@test.test');
      cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest')
  
      cy.get('[type="submit"]').click();

    });
  })