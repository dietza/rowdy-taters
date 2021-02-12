describe('Rowdy Taters', () => {

  const baseUrl = 'http://localhost:3000'

  it('', () => {
    cy
      .fixture('mockMovies.json')
      .then((mockMovies) => {
        cy.intercept('GET', 'http://localhost:3000/', {
          statusCode: 200,
          body: mockMovies.allMovies
        })
      })
      
  })

  it ('Should show the site header when the home page is loaded - "Rowdy Taters!"', () => {
    cy
      .visit(baseUrl)
      .get('h1').contains('Rowdy Taters') 
  });

  it ('Should display all movies in the collected data',  () => {
    cy
      .visit(baseUrl)
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 40)
  });

  it ('Each movie card should display a poster image',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .visit(baseUrl)
      .get('#581392')
      .find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
  });

  it ('Each movie card should display a title',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .visit(baseUrl)
      .get('#581392 .movie-title').contains('Peninsula')
  });

  it ('Each movie card should display a release year',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .visit(baseUrl)
      .get('#581392 .movie-release').contains('2020')
  });

  it ('Each movie card should display a tater rating',  () => {
      // specifically targets the PENINSULA movie card
    cy
      .visit(baseUrl)
      .get('#581392 .movie-rating').contains('Tater Rating: 7.0')
  });

});