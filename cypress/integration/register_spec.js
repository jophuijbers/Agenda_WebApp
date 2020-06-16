describe('Register test', () => {
    before(() => {
      cy.visit('https://i430817.hera.fhict.nl');
    });
    it('Can register', () => {
      cy.get('[href="/register"] > .v-btn__content > span').click();
      cy.get('[data-type="email"]').clear().type('test@test.test6').should('have.value', 'test@test.test6');
      cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest');
      cy.get('[data-type="re-password"]').clear().type('Testtest').should('have.value', 'Testtest');
  
      cy.get('[type="submit"]').click();

    });
  });