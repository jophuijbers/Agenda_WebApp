describe('Register test', () => {
  before(() => {
    cy.visit('/register');
  });
  it('Can register', () => {
    cy.get('[data-type="email"]').clear().type('test@test.test7').should('have.value', 'test@test.test7');
    cy.get('[data-type="password"]').clear().type('Testtest').should('have.value', 'Testtest');
    cy.get('[data-type="re-password"]').clear().type('Testtest').should('have.value', 'Testtest');

    cy.get('[type="submit"]').click();

    cy.visit('/profile');

    cy.url().should('include', '/profile');
  });
});