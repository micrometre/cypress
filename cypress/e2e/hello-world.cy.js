describe('frontend testing', () => {
    it('loads home page', () => {
      cy.visit('https://croydonwebservices.com/');
      cy.get('.navbar-brand').click();
    });
  });