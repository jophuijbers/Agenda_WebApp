describe('Register test', () => {
  before(() => {
    cy.visit('/register');
  });
  it('Can login', () => {
    cy.get('#input-39').clear().type(Cypress.config("test_email")).should('have.value', Cypress.config("test_email"));
    cy.get('#input-42').clear().type(Cypress.config("test_password")).should('have.value', Cypress.config("test_password"));
    cy.get('#input-46').clear().type(Cypress.config("test_password")).should('have.value', Cypress.config("test_password"));

    cy.get('.success').click();

    cy.get('#input-55').clear().type(Cypress.config("test_email")).should('have.value', Cypress.config("test_email"));
    cy.get('#input-58').clear().type(Cypress.config("test_password")).should('have.value', Cypress.config("test_password"));

    cy.get('.success').click();

    cy.visit('/profile');
    cy.wait(500);
    cy.get('.profile > :nth-child(3)').should('contain', Cypress.config("test_email"));
  });
})