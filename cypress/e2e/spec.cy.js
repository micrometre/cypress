  describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
  it('titles are correct', () => {
    const page = cy.visit('https://croydonwebservices.com/');
    page.get('title').should('have.text', 'croydonwebservices.com')
  });
})