describe('Rowdy Taters main page view', () => {

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
    .as('loadAllMovies')
    
    cy.visit(baseUrl)
      
  });

  it ('Should show a loading status', () => {
    cy
      .get('h2').should('contain', 'Loading')
      .should('be.visible')
  });

  it ('Should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `${baseUrl}/`)
  });

  it ('Should show the site header when the home page is loaded - "Rowdy Taters!"', () => {
    cy
      .get('header .header-title').contains('Rowdy Taters') 
  });

  it ('Should show the site footer, containing a link to the About page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.about').should('contain', 'About')
      .should('have.attr', 'href', '/about')
  });

  it ('Should show the site footer, containing a link to the Contact page', () => {
    cy
      .get('footer').should('be.visible')
      .find('.contact').should('contain', 'Contact Us')
      .should('have.attr', 'href', '/contact-us')
  });

  it ('Should be able to search for movies by title', () => {
    cy
      .get('form .search-input[type=text]').type('Peninsula')
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 1)
        .should('have.id', '581392')

      .get('form .search-input').clear()
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 5)
  });

  it ('Should show an error message if no available movies match the search', () => {
    cy
      .get('form .search-input[type=text]').type('50 Shades of Grey')
      .get('.movie-card-container .error-message').should('contain', 'Sorry, no movies')

      .get('form .search-input').clear()
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 5)
  });

  it ('Should not show a loading status once movies have loaded', () => {
    cy
      .get('.error-message').should('not.exist')
  });

  it ('Should display all movies in the collected data',  () => {
    cy
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 5)
  });

  it ('Each movie card should display a poster image',  () => {
    cy
      .get('#581392')
      .find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
  });

  it ('Each movie card should display a title',  () => {
    cy
      .get('#581392 .movie-title').contains('Peninsula')
  });

  it ('Each movie card should display a release year',  () => {
    cy
      .get('#581392 .movie-release').contains('2020')
  });

  it ('Each movie card should display a tater rating',  () => {
    cy
      .get('#581392 .movie-rating').contains('Tater Rating: 7.0')
  });

});


describe('Main page error handling 404', () => {

  const baseUrl = 'http://localhost:3000'

  it ('Shows an error for a 404 status code response', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
    })

    cy.visit(baseUrl)
      .get('.error-message').should('contain', 'These taters got too rowdy - check back later!')
  });
});

describe('Main page error handling 500', () => {

  const baseUrl = 'http://localhost:3000'

  it ('Shows an error for a 500 status code response', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
    })

    cy.visit(baseUrl)
      .get('.error-message').should('contain', 'These taters got too rowdy - check back later!')
  });

});
  
  
describe('Peninsula Details view', () => {

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

    cy
      .fixture('peninsulaMockData.json')
      .then((mockPeninsulaData) => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', {
          statusCode: 200,
          body: mockPeninsulaData.movie
        })
      })

    cy
      .fixture('peninsulaMockData.json')
      .then((mockPeninsulaData) => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392/videos', {
          statusCode: 200,
          body: mockPeninsulaData.videos
        })
      })

    cy.visit(baseUrl)
  });

  it ('Should route to movie details view on click of movie card', () => {
    cy
      .get('#581392')
      .click()
      .get('.details__movie-title').should('contain', 'Peninsula')
  });

});