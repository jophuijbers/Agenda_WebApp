describe('Register test', () => {
    before(() => {
      cy.visit('/register');
    });
    it('Can register', () => {
      cy.get('[data-type="email"]').clear().type('test@test.test3').should('have.value', 'test@test.test3');
      cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest');
      cy.get('[data-type="re-password"]').clear().type('Testtest').should('have.value', 'Testtest');
  
      cy.get('[type="submit"]').click();

    });
  });