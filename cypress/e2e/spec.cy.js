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
    it('displays Home page  ', () => {
      cy.visit('/')
      cy.get('.navbar-toggler')
        .should('be.visible')
        .click()
        .get('#navbarSupportedContent').should('be.visible')
        .click()
        .contains('Home').click()

    })
    it('displays Contact page  ', () => {
      cy.visit('/')
      cy.get('.navbar-toggler')
        .should('be.visible')
        .click()
        .get('#navbarSupportedContent').should('be.visible')
        .click()
        .contains('Contact').click()
        .location('pathname').should('eq', '/contact/')
        .go('back')

    })
  })
})

