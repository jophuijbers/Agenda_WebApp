describe('Register test', () => {
    before(() => {
      cy.visit('http://localhost:8080/register');
    });
    it('Can register', () => {
      cy.get('[data-type="email"]').clear().type('test@test.test2').should('have.value', 'test@test.test2');
      cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest');
      cy.get('[data-type="re-password"]').clear().type('Testtest').should('have.value', 'Testtest');
  
      cy.get('[type="submit"]').click();

    });
  })