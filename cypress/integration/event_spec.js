describe('Add single day event test', () => {
    before(() => {
      cy.visit('http://localhost:8080/addevent');
    });
    it('Can create event', () => {
        
        cy.get('[data-cy="name"]').clear().type('new event').should('have.value', 'new event');

        cy.get('[data-cy="description"]').clear().type('this event is created by cypress').should('have.value', 'this event is created by cypress');

        cy.get('[type="radio"]').first().check({force: true}, 'single').should('be.checked');

        //cy.get('[data-cy="time"]').click();
        cy.get('[type="text"]').first().click();

    });
  });

  describe('Add multiple day event test', () => {
    before(() => {
      cy.visit('http://localhost:8080/addevent');
    });
    it('Can create event', () => {
        
        cy.get('[data-cy="name"]').clear().type('new event').should('have.value', 'new event');

        cy.get('[data-cy="description"]').clear().type('this event is created by cypress').should('have.value', 'this event is created by cypress');

        cy.get('[type="radio"]').check({force: true}, 'multiple').should('be.checked');

    });
  });