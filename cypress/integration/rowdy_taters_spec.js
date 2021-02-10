describe('Rowdy Taters', () => {

  const baseUrl = 'http://localhost:3000'

  it ('Should show the site header when the home page is loaded - "Rowdy Taters!"', () => {
    cy.visit(baseUrl)
      .get('h1').contains('Rowdy Taters') 
  });

  it ('Should display all movies in the collected data',  () => {
    cy.visit(baseUrl)
      .get('.movie-card-container')
      .find('.movie-card').should('have.length', 40)
  });

  it ('Each movie card should display a poster image',  () => {
    cy.visit(baseUrl)
      .get('#581392')
      // specifically targets the PENINSULA movie card
      .find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
  });

  it ('Each movie card should display a title',  () => {
    cy.visit(baseUrl)
      .get('#581392')
      // specifically targets the PENINSULA movie card
      .get('h2').get('.movie-title').contains('Peninsula')
  });

  it ('Each movie card should display a release year',  () => {
    cy.visit(baseUrl)
      .get('#581392')
      // specifically targets the PENINSULA movie card
      .get('.movie-specs')
      .get('.movie-release').contains('2020')
  });

  it ('Each movie card should display a tater rating',  () => {
    cy.visit(baseUrl)
      .get('#581392')
      // specifically targets the PENINSULA movie card
      .get('.movie-specs')
      .get('.movie-rating').contains('Tater Rating: 7.0')
  });

});