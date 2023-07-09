describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

  })

  it('titles are correct', () => {
    const page = cy.visit('/');
    page.get('title').should('have.text', 'Home | croydonwebservices.com')
  });

  it('loads home page', () => {
    cy.visit('/')
    cy.get('.navbar-brand').click();
  });

 it('finds the navbar-toggler collapsed ', () => {
    cy.visit('/')
    cy.get('.navbar-toggler').click();
    })

})


