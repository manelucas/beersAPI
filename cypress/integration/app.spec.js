it('should show beers on page load', () => {
    cy.visit('localhots:3000')

    // find searchbox
    cy.get('.input-box').type('trashy blonde');

    // get the list of the beers and make sure they are on the page
    cy.get('.beers-item').should('have.length', 25)
});

// invalid test 

it('should show no beers when empty string', () => {
    cy.get('.beer').should('')
})