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


describe('Nav Menus', () => {

  context('iphone-5 resolution', () => {

    beforeEach(() => {

      cy.viewport('iphone-5')

    })

    it('displays mobile menu on click', () => {

    cy.get('.navbar-brand')


        .should('be.visible')

        .find('i.hamburger')

        .click()

      cy.get('ul.slideout-menu').should('be.visible')

    })

  })

})

