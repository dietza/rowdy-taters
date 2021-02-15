describe('Money Plane Details view', () => {

  const baseUrl = 'http://localhost:3000/694919'

  before(() => {
    cy
      .fixture('moneyPlaneMockData.json')
      .then((mockMoneyPlaneData) => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 200,
          body: mockMoneyPlaneData
        })
      })

    cy
      .fixture('moneyPlaneMockData.json')
      .then((mockMoneyPlaneData) => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
          statusCode: 200,
          body: mockMoneyPlaneData
        })
      })

    cy
      .fixture('moneyPlaneMockData.json')
      .then((mockMoneyPlaneData) => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
          statusCode: 200,
          body: mockMoneyPlaneData
        })
      })

    cy.visit(baseUrl)
  });

  it ('Should have the correct url for the page showing details for the specified movie', () => {
    cy
      .url().should('eq', `${baseUrl}`)
  });

  it('Has the site header - Rowdy Taters', () => {
    cy.get('h1').contains('Rowdy Taters!')
  });

  it('Has a button called All Movies', () => {
  cy.get('.return-to-home-view-btn').contains('All Movies')
    .get('.details__back-arrow').should('have.attr', 'src', '/static/media/double-left-arrows.79365501.svg')
  });

  it('Has the movie title', () => {
    cy.get('.details__movie-title').contains('Money Plane')
  });

  it('Displays the movie rating', () => {
    cy.get('.details__movie-rating').contains('Tater Rating: 6.1')
  });

  it('Displays the release year and runtime', () => {
    cy.get('.details__movie-release').contains('2020 | 82 mins')
  });

  it('Displays movie synopsis', () => {
    cy.get('.details__movie-overview').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
  });

  it('Displays movie genres', () => {
    cy.get('.details__movie-genres').contains('Genre: Action')
  });

  it('Displays movie trailers', () => {
    cy.get('div div iframe').should('be.visible')
  });

  it('All Movies button can take you back to main page', () => {
    cy.get('.return-to-home-view-btn button').click()
  });
});


describe('Details view error handling - Money Plane', () => {

  const baseUrl = 'http://localhost:3000/694919'

  it ('Shows an error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 404,
    })

    cy.visit(baseUrl)
      .get('.error-message').should('contain', 'These taters got too rowdy - check back later!')
  })

});
