  describe('Home page Test', () => {
  it('titles are correct', () => {
    const page = cy.visit('https://croydonwebservices.com/');
    page.get('title').should('have.text', 'Home | croydonwebservices.com')

  });
})



describe('testing brand icon ', () => {
    it('loads home page', () => {
      cy.visit('https://croydonwebservices.com/');
      cy.get('.navbar-brand').click();
    });
  });