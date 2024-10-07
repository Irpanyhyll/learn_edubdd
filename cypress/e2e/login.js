import LoginPage from '/Login.page';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page',()=>{
    LoginPage.visit();
})

When('I submit login',()=>{
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn();
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
})

Then('I should see homepage',()=>{
    cy.get('#account_summary_tab').should('be.visible')
})