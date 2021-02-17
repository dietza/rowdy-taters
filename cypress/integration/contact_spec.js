describe('Contact Us Page', () => {

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

  it ('Should show the site footer on the main page, containing a link which routes to the Contact page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.contact').should('contain', 'Contact')
      .should('have.attr', 'href', '/contact-us')
      .click()
  });

  it ('Should have the correct url for the Contact page', () => {
    cy
      .url().should('include', '/contact-us')
  });

  it ('Should have a heading for the Contact section', () => {
    cy
      .get('.contact-section')
      .find('h1').should('contain', 'Contact Us')
  });

  it ('Should have an image of a rowdy tater (Allison)', () => {
    cy
      .get('.contacts .AD')
      .find('.prof-pic').should('have.attr', 'src', '/static/media/AD.8304e665.jpg')
      .should('have.attr', 'alt', 'BEAUTIFUL ALLISON')
  });

  it ('Should have a link which routes to the tater\'s GitHub profile', () => {
    cy
    .get('.contacts .AD')
    .find('.github-link').should('have.attr', 'href', 'https://github.com/dietza')
  });

  it ('Should have an image of a rowdy tater (Kristen)', () => {
    cy
      .get('.contacts .KB')
      .find('.prof-pic').should('have.attr', 'src', '/static/media/KB1.53ab6cc0.jpg')
      .should('have.attr', 'alt', 'BEAUTIFUL KRISTEN')
  });

  it ('Should have a link which routes to the tater\'s GitHub profile', () => {
    cy
    .get('.contacts .KB')
    .find('.github-link').should('have.attr', 'href', 'https://github.com/kristenmb')
  });

  it ('Should show the site footer, and be able to navigate to and from the About page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.about').should('contain', 'About')
      .should('have.attr', 'href', '/about')
      .click()
      .url().should('include', '/about')

    .get('footer .contact')
    .click()
  });

  it ('Should be able to navigate back to the home view by clicking the "All Movies" button', () => {
    cy
      .get('.contact__return-to-home-link')
      .should('have.attr', 'href', '/')
      .find('.contact__return-to-home-view-btn')
      .should('contain', 'All Movies')
      .click()

      .url().should('eq', `${baseUrl}/`)
  });
});