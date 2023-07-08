  describe('Home page Test', () => {
  it('titles are correct', () => {
    const page = cy.visit('https://croydonwebservices.com/');
    page.get('title').should('have.text', 'Home | croydonwebservices.com')
  });
})