describe('Rowdy Taters', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      .get('#694919').click();
  });

  it('Has the site header - Rowdy Taters', () => {
    cy.get('h1').contains('Rowdy Taters!')
  });

});