
beforeEach(function() {
  cy.cleanDBandVisit()
})

describe('Blog app', function() {

  it('shouldnt show login form by default', function() {

    cy
    .get('#login-form')
    .should('have.css', 'display', 'none')
    
  })
})