describe('The Home Page', () => {
  it('titles are correct', () => {
    const page = cy.visit('/');
    page.get('title').should('have.text', 'Home | croydonwebservices.com')
  });
})


describe('Nav Menus', () => {
  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })
    it('use requests to navigation bar links', () => {
      const pages = ['Contact']
      cy.visit('/')
      cy.get('.navbar-toggler')
        .should('be.visible')
        .click()
        .get('#navbarSupportedContent').should('be.visible')
        .click()
      pages.forEach(page => {
        cy
          .contains(page)
          .then((link) => {
            cy.request(link.prop('href'))
          })

      })

    });

  })
})


