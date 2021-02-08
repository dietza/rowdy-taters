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

  
});