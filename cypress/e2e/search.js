const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Zero Web App Security homepage',()=>{
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When('I enter "online banking" in the search box',()=>{
    cy.get('#searchTerm').type('Online Banking {enter}')
})

Then('I should see search results related to "online banking"',()=>{
    cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=Online Banking')
    cy.get('h2').should('contain.text', 'Search Results:')
})
