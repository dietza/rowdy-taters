describe('Rowdy Taters', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      .get('#694919').click();
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

  // it('Displays movie trailers', () => {
  //   cy.get('iframe').click({force: true})
  // });  ??????? Cant figure out how to test the trailer!

  it('All Movies button can take you back to main page', () => {
    cy.get('.return-to-home-view-btn').click()
  });
});