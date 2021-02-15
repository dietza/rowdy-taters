describe('About Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy
    .fixture('peninsulaMockData.json')
    .then((mockPeninsulaData) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: mockPeninsulaData
      })
    })
    cy.visit(baseUrl)
  });

  it ('Should show the site footer on the main page, containing a link which routes to the About page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.about').should('contain', 'About')
      .should('have.attr', 'href', '/about')
      .click()
  })

  it ('Should have the correct url for the About page', () => {
    cy
      .url().should('include', '/about')
  });

  it ('Should have an image of a rowdy tater (cat)', () => {
    cy
      .get('.about-section .img-wrap')
      .find('.tater-tot-img').should('have.attr', 'src', '/static/media/tater_tot.d3f50281.jpg')
      .should('have.attr', 'alt', 'BEAUTIFUL CAT')
  })

  it ('Should have a heading for the About section', () => {
    cy
      .get('.about-section .about-section-text')
      .find('.about-heading').should('contain', 'why "Rowdy Taters"')
  })

  it ('Should have a explanation about "Rowdy Taters"', () => {
    cy
      .get('.about-section .about-section-text')
      .find('.about-text').should('contain', 'an unparalleled view')
  })

  it ('Should show the site footer, and be able to navigate to and from the Contact page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.contact').should('contain', 'Contact')
      .should('have.attr', 'href', '/contact-us')
      .click()
      .url().should('include', '/contact-us')

    .get('footer .about')
    .click()
  })

  it ('Should be able to navigate back to the home view by clicking the "All Movies" button', () => {
    cy
      .get('.about__return-to-home-link')
      .should('have.attr', 'href', '/')
      .find('.about__return-to-home-view-btn')
      .should('contain', 'All Movies')
      .click()

      .url().should('eq', `${baseUrl}/`)
  })

})