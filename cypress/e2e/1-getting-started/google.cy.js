describe('Google Search', () => {
  it('loads search page', () => {
    cy.visit('https://croydonwebservices.com/');
    cy.get('.navbar-brand').click();
  });
});