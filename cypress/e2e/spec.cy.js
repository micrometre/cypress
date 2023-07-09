describe('The Home Page', () => {
  it('titles are correct', () => {
    const page = cy.visit('/');
    page.get('title').should('have.text', 'Home | croydonwebservices.com')
  });


  it('finds the navbar-toggler collapsed ', () => {
    cy.visit('/')
    cy.get('.navbar-brand').click();
    cy.get('.navbar-toggler')
      .should('be.visible')
      .click()
  })
})


