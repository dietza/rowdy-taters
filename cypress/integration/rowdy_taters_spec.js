describe('Rowdy Taters main page view', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy
    .fixture('mockMovies.json')
    .then((mockMovies) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: mockMovies
      })
    })
    cy.visit(baseUrl)
  });

  it ('Should have the correct url for the home page on load', () => {
    cy.url().should('include', '/')
  });

  it ('Should show the site header when the home page is loaded - "Rowdy Taters!"', () => {
    cy
      .get('h1').contains('Rowdy Taters') 
  });

  it ('Should display all movies in the collected data',  () => {
    cy
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 5)
  });

  it ('Each movie card should display a poster image',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .get('#581392')
      .find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
  });

  it ('Each movie card should display a title',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .get('#581392 .movie-title').contains('Peninsula')
  });

  it ('Each movie card should display a release year',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .get('#581392 .movie-release').contains('2020')
  });

  it ('Each movie card should display a tater rating',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .get('#581392 .movie-rating').contains('Tater Rating: 7.0')
  });

});


describe('Main page error handling', () => {

  const baseUrl = 'http://localhost:3000'

  it ('Shows an error', () => {
    cy
    .fixture('mockMovies.json')
    .then(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 404,
      })
    })

    cy.visit(baseUrl)
      .get('#581392')
  })

})
  
  
  
  
  
  
    // it ('STUBS', () => {
    //   cy
    //     .get('#581392')
    //     .click()
    //   cy
    //     .fixture('mockMovies.json')
    //     .then((mockMovies) => {
    //       cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', {
    //         statusCode: 200,
    //         body: mockMovies.singleMovie
    //       })
    //       cy
    //       .fixture('mockMovies.json')
    //       .then((mockMovies) => {
    //         cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392/videos', {
    //           statusCode: 200,
    //           body: mockMovies.video,
    //         })
    //       })
    //     })
    // })